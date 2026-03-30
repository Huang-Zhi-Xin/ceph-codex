import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';

import _ from 'lodash';
import { Observable, ReplaySubject, Subscription, combineLatest, of } from 'rxjs';

import { Permissions } from '~/app/shared/models/permissions';
import { AuthStorageService } from '~/app/shared/services/auth-storage.service';
import { RefreshIntervalService } from '~/app/shared/services/refresh-interval.service';
import { RgwDaemonService } from '~/app/shared/api/rgw-daemon.service';
import { RgwRealmService } from '~/app/shared/api/rgw-realm.service';
import { RgwZoneService } from '~/app/shared/api/rgw-zone.service';
import { RgwZonegroupService } from '~/app/shared/api/rgw-zonegroup.service';
import { RgwBucketService } from '~/app/shared/api/rgw-bucket.service';
import { PrometheusService } from '~/app/shared/api/prometheus.service';

import { RgwPromqls as queries } from '~/app/shared/enum/dashboard-promqls.enum';
import { Icons } from '~/app/shared/enum/icons.enum';
import { RgwMultisiteService } from '~/app/shared/api/rgw-multisite.service';
import { catchError, shareReplay, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'cd-rgw-overview-dashboard',
  templateUrl: './rgw-overview-dashboard.component.html',
  styleUrls: ['./rgw-overview-dashboard.component.scss']
})
export class RgwOverviewDashboardComponent implements OnInit, OnDestroy {
  icons = Icons;
  isZhHans = false;

  interval = new Subscription();
  permissions: Permissions;
  rgwDaemonCount = 0;
  rgwRealmCount = 0;
  rgwZonegroupCount = 0;
  rgwZoneCount = 0;
  rgwBucketCount = 0;
  objectCount = 0;
  UserCount = 0;
  totalPoolUsedBytes = 0;
  averageObjectSize = 0;
  realmData: any;
  realmSub: Subscription;
  multisiteInfo: object[] = [];
  ZonegroupSub: Subscription;
  ZoneSUb: Subscription;
  queriesResults: { [key: string]: [] } = {
    RGW_REQUEST_PER_SECOND: [],
    BANDWIDTH: [],
    AVG_GET_LATENCY: [],
    AVG_PUT_LATENCY: []
  };
  timerGetPrometheusDataSub: Subscription;
  chartTitles = ['Metadata Sync', 'Data Sync'];
  realm: string;
  zonegroup: string;
  zone: string;
  metadataSyncInfo: string;
  replicaZonesInfo: any = [];
  metadataSyncData: {};
  showMultisiteCard = true;
  loading = true;
  multisiteSyncStatus$: Observable<any>;
  subject = new ReplaySubject<any>();
  syncCardLoading = true;
  fetchDataSub: Subscription;
  inventoryTitle = 'Inventory';
  performanceStatisticsTitle = 'Performance Statistics';
  usedCapacityTitle = 'Used Capacity';
  averageObjectSizeTitle = 'Average Object Size';
  gatewayLabel = 'Gateway';
  realmLabel = 'Realm';
  zoneGroupLabel = 'Zone Group';
  zoneLabel = 'Zone';
  bucketLabel = 'Bucket';
  userLabel = 'User';
  objectLabel = 'Object';
  requestsPerSecondTitle = 'Requests/sec';
  latencyTitle = 'Latency';
  bandwidthTitle = 'Bandwidth';
  multisiteSyncStatusTitle = 'Multi-Site Sync Status';
  primarySourceZoneTitle = 'Primary Source Zone';
  sourceZonesTitle = 'Source Zones';
  metadataSyncTitle = 'Metadata Sync';
  dataSyncTitle = 'Data Sync';
  multisiteNotConfiguredText =
    '需要先配置多站点功能，才能查看多站点同步状态。请参考文档完成多站点功能的配置与启用。';

  constructor(
    private authStorageService: AuthStorageService,
    private refreshIntervalService: RefreshIntervalService,
    private rgwDaemonService: RgwDaemonService,
    private rgwRealmService: RgwRealmService,
    private rgwZonegroupService: RgwZonegroupService,
    private rgwZoneService: RgwZoneService,
    private rgwBucketService: RgwBucketService,
    private prometheusService: PrometheusService,
    private rgwMultisiteService: RgwMultisiteService,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    this.permissions = this.authStorageService.getPermissions();
    this.isZhHans = this.localeId.startsWith('zh');
    this.inventoryTitle = this.isZhHans ? '清单' : 'Inventory';
    this.performanceStatisticsTitle = this.isZhHans ? '性能统计' : 'Performance Statistics';
    this.usedCapacityTitle = this.isZhHans ? '已用容量' : 'Used Capacity';
    this.averageObjectSizeTitle = this.isZhHans ? '平均对象大小' : 'Average Object Size';
    this.gatewayLabel = this.isZhHans ? '网关' : 'Gateway';
    this.realmLabel = this.isZhHans ? 'Realm' : 'Realm';
    this.zoneGroupLabel = this.isZhHans ? 'Zone Group' : 'Zone Group';
    this.zoneLabel = this.isZhHans ? 'Zone' : 'Zone';
    this.bucketLabel = this.isZhHans ? '存储桶' : 'Bucket';
    this.userLabel = this.isZhHans ? '用户' : 'User';
    this.objectLabel = this.isZhHans ? '对象' : 'Object';
    this.requestsPerSecondTitle = this.isZhHans ? '请求次数/秒' : 'Requests/sec';
    this.latencyTitle = this.isZhHans ? '时延' : 'Latency';
    this.bandwidthTitle = this.isZhHans ? '带宽' : 'Bandwidth';
    this.multisiteSyncStatusTitle = this.isZhHans ? '多站点同步状态' : 'Multi-Site Sync Status';
    this.primarySourceZoneTitle = this.isZhHans ? '主源 Zone' : 'Primary Source Zone';
    this.sourceZonesTitle = this.isZhHans ? '源 Zone 列表' : 'Source Zones';
    this.metadataSyncTitle = this.isZhHans ? '元数据同步' : 'Metadata Sync';
    this.dataSyncTitle = this.isZhHans ? '数据同步' : 'Data Sync';
    this.multisiteNotConfiguredText = this.isZhHans
      ? '需要先配置多站点功能，才能查看多站点同步状态。请参考文档完成多站点功能的配置与启用。'
      : 'Multi-site needs to be configured in order to see the multi-site sync status. Please consult the documentation on how to configure and enable the multi-site functionality.';
  }

  ngOnInit() {
    this.interval = this.refreshIntervalService.intervalData$.subscribe(() => {
      this.fetchDataSub = combineLatest([
        this.rgwDaemonService.list(),
        this.rgwBucketService.fetchAndTransformBuckets(),
        this.rgwBucketService.totalNumObjects$,
        this.rgwBucketService.totalUsedCapacity$,
        this.rgwBucketService.averageObjectSize$,
        this.rgwBucketService.getTotalBucketsAndUsersLength()
      ]).subscribe(([daemonData, _, objectCount, usedCapacity, averageSize, bucketData]) => {
        this.rgwDaemonCount = daemonData.length;
        this.objectCount = objectCount;
        this.totalPoolUsedBytes = usedCapacity;
        this.averageObjectSize = averageSize;
        this.rgwBucketCount = bucketData.buckets_count;
        this.UserCount = bucketData.users_count;
        this.getSyncStatus();
      });
    });
    this.realmSub = this.rgwRealmService.list().subscribe((data: any) => {
      this.rgwRealmCount = data['realms'].length || 0;
    });
    this.ZonegroupSub = this.rgwZonegroupService.list().subscribe((data: any) => {
      this.rgwZonegroupCount = data['zonegroups'].length;
    });
    this.ZoneSUb = this.rgwZoneService.list().subscribe((data: any) => {
      this.rgwZoneCount = data['zones'].length;
    });
    this.getPrometheusData(this.prometheusService.lastHourDateObject);
    this.multisiteSyncStatus$ = this.subject.pipe(
      switchMap(() =>
        this.rgwMultisiteService.getSyncStatus().pipe(
          tap((data: any) => {
            this.loading = false;
            this.replicaZonesInfo = data['dataSyncInfo'];
            this.metadataSyncInfo = data['metadataSyncInfo'];
            if (this.replicaZonesInfo.length === 0) {
              this.showMultisiteCard = false;
              this.syncCardLoading = false;
              this.loading = false;
            }
            [this.realm, this.zonegroup, this.zone] = data['primaryZoneData'];
          }),
          catchError((err) => {
            this.showMultisiteCard = false;
            this.syncCardLoading = false;
            this.loading = false;
            err.preventDefault();
            return of(true);
          })
        )
      ),
      shareReplay(1)
    );
  }

  ngOnDestroy() {
    this.interval?.unsubscribe();
    this.realmSub?.unsubscribe();
    this.ZonegroupSub?.unsubscribe();
    this.ZoneSUb?.unsubscribe();
    this.fetchDataSub?.unsubscribe();
    this.prometheusService?.unsubscribe();
  }

  getPrometheusData(selectedTime: any) {
    this.queriesResults = this.prometheusService.getRangeQueriesData(
      selectedTime,
      queries,
      this.queriesResults,
      true
    );
  }

  getSyncStatus() {
    this.subject.next();
  }

  trackByFn(zone: any) {
    return zone;
  }

  get multisiteConfiguredHint(): string {
    return this.isZhHans
      ? '请参考文档完成配置。'
      : 'Please consult the documentation on how to configure and enable the multi-site functionality.';
  }
}
