import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { MultiClusterService } from '~/app/shared/api/multi-cluster.service';
import { SettingsService } from '~/app/shared/api/settings.service';

import { MultiCluster } from '~/app/shared/models/multi-cluster';
import { Permissions } from '~/app/shared/models/permissions';
import { AuthStorageService } from '~/app/shared/services/auth-storage.service';
import { CookiesService } from '~/app/shared/services/cookie.service';
import {
  FeatureTogglesMap$,
  FeatureTogglesService
} from '~/app/shared/services/feature-toggles.service';
import { NotificationService } from '~/app/shared/services/notification.service';
import { PrometheusAlertService } from '~/app/shared/services/prometheus-alert.service';
import { SummaryService } from '~/app/shared/services/summary.service';

@Component({
  selector: 'cd-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  clusterDetails: any[] = [];

  permissions: Permissions;
  enabledFeature$: FeatureTogglesMap$;
  clusterTokenStatus: object = {};
  summaryData: any;

  rightSidebarOpen = false; // rightSidebar only opens when width is less than 768px
  showMenuSidebar = true;

  simplebar = {
    autoHide: false
  };
  displayedSubMenu = {};
  private subs = new Subscription();

  clustersMap: Map<string, any> = new Map<string, any>();
  selectedCluster: {
    name: string;
    cluster_alias: string;
    user: string;
    cluster_connection_status?: number;
  };
  currentClusterName: string;
  isZhHans: boolean;
  dashboardLabel: string;
  blockImagesLabel: string;
  blockMirroringLabel: string;
  storageUsersLabel: string;
  rgwOverviewLabel: string;
  rgwUsersLabel: string;
  rgwBucketsLabel: string;
  rgwTopicsLabel: string;
  rgwTieringLabel: string;
  rgwMultisiteLabel: string;
  rgwGatewaysLabel: string;
  rgwConfigurationLabel: string;
  multiClusterLabel: string;

  constructor(
    public notificationService: NotificationService,
    private authStorageService: AuthStorageService,
    private multiClusterService: MultiClusterService,
    private router: Router,
    private summaryService: SummaryService,
    private featureToggles: FeatureTogglesService,
    public prometheusAlertService: PrometheusAlertService,
    private cookieService: CookiesService,
    private settingsService: SettingsService,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    this.permissions = this.authStorageService.getPermissions();
    this.enabledFeature$ = this.featureToggles.get();
    this.isZhHans = this.localeId.startsWith('zh');
    this.dashboardLabel = this.isZhHans ? '仪表盘' : 'Dashboard';
    this.blockImagesLabel = this.isZhHans ? '映像' : 'Images';
    this.blockMirroringLabel = this.isZhHans ? '镜像' : 'Mirroring';
    this.storageUsersLabel = this.isZhHans ? '存储用户' : 'Storage Users';
    this.rgwOverviewLabel = this.isZhHans ? '概览' : 'Overview';
    this.rgwUsersLabel = this.isZhHans ? '用户' : 'Users';
    this.rgwBucketsLabel = this.isZhHans ? '存储桶' : 'Buckets';
    this.rgwTopicsLabel = this.isZhHans ? '主题' : 'Topics';
    this.rgwTieringLabel = this.isZhHans ? '分层' : 'Tiering';
    this.rgwMultisiteLabel = this.isZhHans ? '多站点' : 'Multi-site';
    this.rgwGatewaysLabel = this.isZhHans ? '网关' : 'Gateways';
    this.rgwConfigurationLabel = this.isZhHans ? '配置' : 'Configuration';
    this.multiClusterLabel = this.isZhHans ? '多集群' : 'Multi-Cluster';
  }

  ngOnInit() {
    this.subs.add(
      this.multiClusterService.subscribe((resp: object) => {
        const clustersConfig = resp['config'];
        if (clustersConfig) {
          this.clustersMap.clear();
          Object.keys(clustersConfig).forEach((clusterKey: string) => {
            const clusterDetailsList = clustersConfig[clusterKey];
            clusterDetailsList.forEach((clusterDetails: MultiCluster) => {
              const clusterUser = clusterDetails['user'];
              const clusterUrl = clusterDetails['url'];
              const clusterUniqueKey = `${clusterUrl}-${clusterUser}`;
              this.clustersMap.set(clusterUniqueKey, clusterDetails);
              this.checkClusterConnectionStatus();
            });
          });
          this.selectedCluster =
            this.clustersMap.get(`${resp['current_url']}-${resp['current_user']}`) || {};
          this.currentClusterName = `${this.selectedCluster?.name} - ${this.selectedCluster?.cluster_alias} - ${this.selectedCluster?.user}`;
        }
      })
    );

    this.subs.add(
      this.summaryService.subscribe((summary) => {
        this.summaryData = summary;
      })
    );
    this.subs.add(
      this.multiClusterService.subscribeClusterTokenStatus((resp: object) => {
        this.clusterTokenStatus = resp;
        this.checkClusterConnectionStatus();
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  checkClusterConnectionStatus() {
    this.clustersMap.forEach((clusterDetails, clusterName) => {
      const clusterTokenStatus = this.clusterTokenStatus[clusterDetails.name];
      const connectionStatus = clusterTokenStatus ? clusterTokenStatus.status : 0;
      const user = clusterTokenStatus ? clusterTokenStatus.user : clusterDetails.user;

      this.clustersMap.set(clusterName, {
        ...clusterDetails,
        cluster_connection_status: connectionStatus,
        user: user
      });

      if (clusterDetails.cluster_alias === 'local-cluster') {
        this.clustersMap.set(clusterName, {
          ...clusterDetails,
          cluster_connection_status: 0,
          user: user
        });
      }
    });
  }

  blockHealthColor() {
    if (this.summaryData && this.summaryData.rbd_mirroring) {
      if (this.summaryData.rbd_mirroring.errors > 0) {
        return { color: '#f4926c' };
      } else if (this.summaryData.rbd_mirroring.warnings > 0) {
        return { color: '#f0ad4e' };
      }
    }

    return undefined;
  }

  toggleSubMenu(menu: string) {
    this.displayedSubMenu[menu] = !this.displayedSubMenu[menu];
  }

  toggleRightSidebar() {
    this.rightSidebarOpen = !this.rightSidebarOpen;
  }

  onClusterSelection(value: object) {
    this.multiClusterService.setCluster(value).subscribe(
      (resp: any) => {
        if (value['cluster_alias'] === 'local-cluster') {
          localStorage.setItem('cluster_api_url', '');
        } else {
          localStorage.setItem('current_cluster_name', `${value['name']}-${value['user']}`);
          localStorage.setItem('cluster_api_url', value['url']);
        }
        this.selectedCluster = this.clustersMap.get(`${value['url']}-${value['user']}`) || {};
        const clustersConfig = resp['config'];
        if (clustersConfig && typeof clustersConfig === 'object') {
          Object.keys(clustersConfig).forEach((clusterKey: string) => {
            const clusterDetailsList = clustersConfig[clusterKey];

            clusterDetailsList.forEach((clusterDetails: any) => {
              const clusterName = clusterDetails['name'];
              const clusterToken = clusterDetails['token'];
              const clusterUser = clusterDetails['user'];

              if (
                clusterName === this.selectedCluster['name'] &&
                clusterUser === this.selectedCluster['user'] &&
                clusterDetails['cluster_alias'] !== 'local-cluster'
              ) {
                this.cookieService.setToken(`${clusterName}-${clusterUser}`, clusterToken);
              }
            });
          });
        }
      },
      () => {},
      () => {
        // force refresh grafana api url to get the correct url for the selected cluster
        this.settingsService.ifSettingConfigured(
          'api/grafana/url',
          () => {},
          () => {},
          true
        );
        const currentRoute = this.router.url.split('?')[0];
        this.multiClusterService.refreshMultiCluster(currentRoute);
      }
    );
  }
  toggleSidebar() {
    this.notificationService.toggleSidebar();
  }
  trackByFn(item: any) {
    return item;
  }
}
