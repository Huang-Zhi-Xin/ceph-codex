import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';

import _ from 'lodash';
import { BehaviorSubject, EMPTY, Observable, Subject, Subscription, of } from 'rxjs';
import { catchError, exhaustMap, switchMap, takeUntil } from 'rxjs/operators';

import { HealthService } from '~/app/shared/api/health.service';
import { PrometheusService, PromqlGuageMetric } from '~/app/shared/api/prometheus.service';
import {
  CapacityCardQueries,
  UtilizationCardQueries
} from '~/app/shared/enum/dashboard-promqls.enum';
import { Icons } from '~/app/shared/enum/icons.enum';
import {
  CapacityCardDetails,
  DashboardDetails,
  InventoryCommonDetail,
  InventoryDetails
} from '~/app/shared/models/cd-details';
import { Permissions } from '~/app/shared/models/permissions';
import { AlertmanagerAlert } from '~/app/shared/models/prometheus-alerts';
import { AuthStorageService } from '~/app/shared/services/auth-storage.service';
import {
  FeatureTogglesMap$,
  FeatureTogglesService
} from '~/app/shared/services/feature-toggles.service';
import { RefreshIntervalService } from '~/app/shared/services/refresh-interval.service';
import { PrometheusListHelper } from '~/app/shared/helpers/prometheus-list-helper';
import { PrometheusAlertService } from '~/app/shared/services/prometheus-alert.service';
import { OrchestratorService } from '~/app/shared/api/orchestrator.service';
import { MgrModuleService } from '~/app/shared/api/mgr-module.service';
import { AlertClass } from '~/app/shared/enum/health-icon.enum';
import { HardwareService } from '~/app/shared/api/hardware.service';
import { SettingsService } from '~/app/shared/api/settings.service';
import {
  Health,
  HealthSnapshotMap,
  IscsiMap,
  PgStateCount
} from '~/app/shared/models/health.interface';
import { AppConstants } from '~/app/shared/constants/app.constants';

@Component({
  selector: 'cd-dashboard-v3',
  templateUrl: './dashboard-v3.component.html',
  styleUrls: ['./dashboard-v3.component.scss']
})
export class DashboardV3Component extends PrometheusListHelper implements OnInit, OnDestroy {
  origin = window.location.origin;
  icons = Icons;
  isZhHans: boolean;
  detailsTitle: string;
  statusTitle: string;
  capacityTitle: string;
  inventoryTitle: string;
  clusterUtilizationTitle: string;
  clusterIdLabel: string;
  orchestratorLabel: string;
  orchestratorUnavailableLabel: string;
  cephVersionLabel: string;
  clusterApiLabel: string;
  managedByLabel: string;
  viewAlertsLabel: string;
  hostLabel: string;
  monitorLabel: string;
  managerLabel: string;
  poolLabel: string;
  pgLabel: string;
  objectGatewayLabel: string;
  metadataServerLabel: string;
  iscsiGatewayLabel: string;
  usedCapacityRawTitle: string;
  iopsTitle: string;
  osdLatenciesTitle: string;
  clientThroughputTitle: string;
  recoveryThroughputTitle: string;
  clusterLabel: string;
  capacityEmptyLabel: string;
  usedCapacityLabels: string[];
  iopsLabels: string[];
  throughputLabels: string[];
  recoveryLabels: string[];

  permissions: Permissions;

  hardwareSubject = new BehaviorSubject<any>([]);
  private subs = new Subscription();
  private destroy$ = new Subject<void>();

  enabledFeature$: FeatureTogglesMap$;
  prometheusAlerts$: Observable<AlertmanagerAlert[]>;
  isHardwareEnabled$: Observable<boolean>;
  hardwareSummary$: Observable<any>;
  managedByConfig$: Observable<any>;

  color: string;
  flexHeight = true;
  simplebar = {
    autoHide: true
  };
  borderClass: string;
  alertType: string;
  alertClass = AlertClass;

  queriesResults: { [key: string]: [] } = {
    USEDCAPACITY: [],
    IPS: [],
    OPS: [],
    READLATENCY: [],
    WRITELATENCY: [],
    READCLIENTTHROUGHPUT: [],
    WRITECLIENTTHROUGHPUT: [],
    RECOVERYBYTES: [],
    READIOPS: [],
    WRITEIOPS: []
  };

  detailsCardData: DashboardDetails = {};
  capacityCardData: CapacityCardDetails = {
    osdNearfull: null,
    osdFull: null
  };
  healthCardData: Health;
  hasHealthChecks: boolean;
  hardwareHealth: any;
  hardwareEnabled: boolean = false;
  hasHardwareError: boolean = false;
  totalCapacity: number = null;
  usedCapacity: number = null;
  hostsCount: number = null;
  monCount: number = null;
  poolCount: number = null;
  rgwCount: number = null;
  osdCount: { in: number; out: number; up: number; down: number } & InventoryCommonDetail = null;
  pgStatus: { statuses: PgStateCount[] } & InventoryCommonDetail = null;
  mgrStatus: InventoryDetails = null;
  mdsStatus: InventoryDetails = null;
  iscsiMap: IscsiMap = null;

  constructor(
    private orchestratorService: OrchestratorService,
    private authStorageService: AuthStorageService,
    private featureToggles: FeatureTogglesService,
    private healthService: HealthService,
    private settingsService: SettingsService,
    public prometheusService: PrometheusService,
    private mgrModuleService: MgrModuleService,
    private refreshIntervalService: RefreshIntervalService,
    public prometheusAlertService: PrometheusAlertService,
    private hardwareService: HardwareService,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    super(prometheusService);
    this.permissions = this.authStorageService.getPermissions();
    this.enabledFeature$ = this.featureToggles.get();
    this.isZhHans = this.localeId.startsWith('zh');
    this.detailsTitle = this.isZhHans ? '详细信息' : 'Details';
    this.statusTitle = this.isZhHans ? '状态' : 'Status';
    this.capacityTitle = this.isZhHans ? '容量' : 'Capacity';
    this.inventoryTitle = this.isZhHans ? '清单' : 'Inventory';
    this.clusterUtilizationTitle = this.isZhHans ? '集群利用率' : 'Cluster Utilization';
    this.clusterIdLabel = this.isZhHans ? '集群 ID' : 'Cluster ID';
    this.orchestratorLabel = this.isZhHans ? '编排器' : 'Orchestrator';
    this.orchestratorUnavailableLabel = this.isZhHans ? '编排器不可用' : 'Orchestrator is not available';
    this.cephVersionLabel = this.isZhHans ? '版本信息' : 'Version';
    this.clusterApiLabel = this.isZhHans ? '集群 API' : 'Cluster API';
    this.managedByLabel = this.isZhHans ? '管理方' : 'Managed By';
    this.viewAlertsLabel = this.isZhHans ? '查看告警' : 'View alerts';
    this.hostLabel = this.isZhHans ? '主机' : 'Host';
    this.monitorLabel = this.isZhHans ? '监视器' : 'Monitor';
    this.managerLabel = this.isZhHans ? '管理器' : 'Manager';
    this.poolLabel = this.isZhHans ? '存储池' : 'Pool';
    this.pgLabel = 'PG';
    this.objectGatewayLabel = this.isZhHans ? '对象网关' : 'Object Gateway';
    this.metadataServerLabel = this.isZhHans ? '元数据服务器' : 'Metadata Server';
    this.iscsiGatewayLabel = this.isZhHans ? 'iSCSI 网关' : 'iSCSI Gateway';
    this.usedCapacityRawTitle = this.isZhHans ? '已用容量（裸容量）' : 'Used Capacity (RAW)';
    this.iopsTitle = 'IOPS';
    this.osdLatenciesTitle = this.isZhHans ? 'OSD 延迟' : 'OSD Latencies';
    this.clientThroughputTitle = this.isZhHans ? '客户端吞吐量' : 'Client Throughput';
    this.recoveryThroughputTitle = this.isZhHans ? '恢复吞吐量' : 'Recovery Throughput';
    this.clusterLabel = this.isZhHans ? '集群' : 'Cluster';
    this.capacityEmptyLabel = this.isZhHans ? '未配置 OSD，暂无容量数据' : 'No OSD configured. Capacity data is unavailable.';
    this.usedCapacityLabels = [this.isZhHans ? '已用容量' : 'Used Capacity'];
    this.iopsLabels = [this.isZhHans ? '读取' : 'Reads', this.isZhHans ? '写入' : 'Writes'];
    this.throughputLabels = [this.isZhHans ? '读取' : 'Reads', this.isZhHans ? '写入' : 'Writes'];
    this.recoveryLabels = [this.isZhHans ? '恢复吞吐量' : 'Recovery Throughput'];
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.permissions.configOpt.read) {
      this.isHardwareEnabled$ = this.getHardwareConfig();
      this.hardwareSummary$ = this.hardwareSubject.pipe(
        switchMap(() =>
          this.hardwareService.getSummary().pipe(
            switchMap((data: any) => {
              this.hasHardwareError = data.host.flawed;
              return of(data);
            })
          )
        )
      );
      this.managedByConfig$ = this.settingsService.getValues('MANAGED_BY_CLUSTERS');
    }

    this.loadInventories();
    this.getPrometheusData(this.prometheusService.lastHourDateObject);
    this.getDetailsCardData();
    this.getCapacityCardData();
    this.prometheusAlertService.getAlerts(true);
  }

  ngOnDestroy() {
    this.prometheusService.unsubscribe();
    this.subs?.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleAlertsWindow(type: AlertClass) {
    this.alertType === type ? (this.alertType = null) : (this.alertType = type);
  }

  getDetailsCardData() {
    this.orchestratorService.getName().subscribe((data: string) => {
      this.detailsCardData.orchestrator = data;
    });
    this.detailsCardData.cephVersion = AppConstants.productVersion;
  }

  public getPrometheusData(selectedTime: any) {
    this.queriesResults = this.prometheusService.getRangeQueriesData(
      selectedTime,
      UtilizationCardQueries,
      this.queriesResults
    );
  }

  getCapacityQueryValues(data: PromqlGuageMetric['result']) {
    let osdFull = null;
    let osdNearfull = null;
    if (data?.[0]?.metric?.['__name__'] === CapacityCardQueries.OSD_FULL) {
      osdFull = data[0]?.value?.[1];
      osdNearfull = data[1]?.value?.[1];
    } else {
      osdFull = data?.[1]?.value?.[1];
      osdNearfull = data?.[0]?.value?.[1];
    }
    return [osdFull, osdNearfull];
  }

  getCapacityCardData() {
    const CAPACITY_QUERY = `{__name__=~"${CapacityCardQueries.OSD_FULL}|${CapacityCardQueries.OSD_NEARFULL}"}`;
    this.prometheusService
      .getGaugeQueryData(CAPACITY_QUERY)
      .subscribe((data: PromqlGuageMetric) => {
        const [osdFull, osdNearfull] = this.getCapacityQueryValues(data?.result);
        this.capacityCardData.osdFull = this.prometheusService.formatGuageMetric(osdFull);
        this.capacityCardData.osdNearfull = this.prometheusService.formatGuageMetric(osdNearfull);
      });
  }

  trackByFn(index: any) {
    return index;
  }

  getHardwareConfig(): Observable<any> {
    return this.mgrModuleService.getConfig('cephadm').pipe(
      switchMap((resp: any) => {
        this.hardwareEnabled = resp?.hw_monitoring;
        return of(resp?.hw_monitoring);
      })
    );
  }

  refreshIntervalObs(fn: Function) {
    return this.refreshIntervalService.intervalData$.pipe(
      exhaustMap(() => fn().pipe(catchError(() => EMPTY))),
      takeUntil(this.destroy$)
    );
  }

  private safeSum(a: number, b: number): number | null {
    return a != null && b != null ? a + b : null;
  }

  private safeDifference(a: number, b: number): number | null {
    return a != null && b != null ? a - b : null;
  }

  loadInventories() {
    this.refreshIntervalObs(() => this.healthService.getHealthSnapshot()).subscribe({
      next: (data: HealthSnapshotMap) => {
        this.detailsCardData.fsid = data?.fsid;
        this.healthCardData = data?.health;
        this.hasHealthChecks = !!Object.keys(this.healthCardData?.checks ?? {})?.length;
        this.monCount = data?.monmap?.num_mons;

        const osdMap = data?.osdmap;
        const osdIn = osdMap?.in;
        const osdUp = osdMap?.up;
        const osdTotal = osdMap?.num_osds;

        this.osdCount = {
          in: osdIn,
          up: osdUp,
          total: osdTotal,
          down: this.safeDifference(osdTotal, osdUp),
          out: this.safeDifference(osdTotal, osdIn)
        };

        const pgmap = data?.pgmap;
        this.poolCount = pgmap?.num_pools;
        this.usedCapacity = pgmap?.bytes_used;
        this.totalCapacity = pgmap?.bytes_total;
        this.pgStatus = {
          statuses: pgmap?.pgs_by_state,
          total: pgmap?.num_pgs
        };

        const mgrmap = data?.mgrmap;
        const mgrInfo = mgrmap?.num_standbys;
        const mgrSuccess = mgrmap?.num_active;

        this.mgrStatus = {
          info: mgrInfo,
          success: mgrSuccess,
          total: this.safeSum(mgrInfo, mgrSuccess)
        };

        const mdsInfo = data?.fsmap?.num_standbys;
        const mdsSuccess = data?.fsmap?.num_active;

        this.mdsStatus = {
          info: mdsInfo,
          success: mdsSuccess,
          total: this.safeSum(mdsInfo, mdsSuccess)
        };

        this.rgwCount = data?.num_rgw_gateways;
        this.iscsiMap = data?.num_iscsi_gateways;
        this.hostsCount = data?.num_hosts;
        this.enabledFeature$ = this.featureToggles.get();
      }
    });
  }
}
