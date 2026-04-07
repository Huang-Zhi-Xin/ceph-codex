import { Component, Inject, LOCALE_ID, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { MultiClusterService } from '~/app/shared/api/multi-cluster.service';
import { Icons } from '~/app/shared/enum/icons.enum';
import { ModalService } from '~/app/shared/services/modal.service';
import { MultiClusterFormComponent } from './multi-cluster-form/multi-cluster-form.component';
import { PrometheusService } from '~/app/shared/api/prometheus.service';
import { CdTableColumn } from '~/app/shared/models/cd-table-column';
import { CellTemplate } from '~/app/shared/enum/cell-template.enum';
import { Router } from '@angular/router';

import {
  MultiClusterPromqls as allQueries,
  MultiClusterPromqlsForClusterUtilization as ClusterUltilizationQueries,
  MultiClusterPromqlsForPoolUtilization as PoolUltilizationQueries
} from '~/app/shared/enum/dashboard-promqls.enum';
import { SettingsService } from '~/app/shared/api/settings.service';
import { NotificationType } from '~/app/shared/enum/notification-type.enum';
import { NotificationService } from '~/app/shared/services/notification.service';

@Component({
  selector: 'cd-multi-cluster',
  templateUrl: './multi-cluster.component.html',
  styleUrls: ['./multi-cluster.component.scss']
})
export class MultiClusterComponent implements OnInit, OnDestroy {
  COUNT_OF_UTILIZATION_CHARTS = 5;
  isZhHans = false;
  connectClusterTitle = 'Connect Cluster';
  connectClusterDescription =
    'Upgrade your current cluster to a multi-cluster setup effortlessly. Click on the "Connect Cluster" button to begin the process.';
  clusterManagedByText = 'This cluster is already managed by cluster -';
  connectClusterButtonText = 'Connect Cluster';

  @ViewChild('clusterUsageTpl', { static: true })
  clusterUsageTpl: TemplateRef<any>;
  @ViewChild('nameTpl', { static: true })
  nameTpl: any;

  columns: Array<CdTableColumn> = [];

  queriesResults: any = {
    ALERTS_COUNT: [],
    CLUSTER_COUNT: [],
    HEALTH_OK_COUNT: [],
    HEALTH_WARNING_COUNT: [],
    HEALTH_ERROR_COUNT: [],
    TOTAL_CLUSTERS_CAPACITY: [],
    TOTAL_USED_CAPACITY: [],
    CLUSTER_CAPACITY_UTILIZATION: [],
    CLUSTER_IOPS_UTILIZATION: [],
    CLUSTER_THROUGHPUT_UTILIZATION: [],
    POOL_CAPACITY_UTILIZATION: [],
    POOL_IOPS_UTILIZATION: [],
    POOL_THROUGHPUT_UTILIZATION: [],
    TOTAL_CAPACITY: [],
    USED_CAPACITY: [],
    HOSTS: [],
    POOLS: [],
    OSDS: [],
    CLUSTER_ALERTS: [],
    version: '',
    FEDERATE_UP_METRIC: []
  };
  alerts: any;

  private subs = new Subscription();
  dashboardClustersMap: Map<string, string> = new Map<string, string>();
  icons = Icons;
  loading = true;
  bsModalRef: NgbModalRef;
  isMultiCluster = true;
  clusterTokenStatus: object = {};
  localClusterName: string;
  clusters: any = [];
  connectionErrorsCount = 0;

  capacityLabels: string[] = [];
  iopsLabels: string[] = [];
  throughputLabels: string[] = [];
  poolIOPSLabels: string[] = [];
  poolCapacityLabels: string[] = [];
  poolThroughputLabels: string[] = [];

  capacityValues: string[] = [];
  iopsValues: string[] = [];
  throughputValues: string[] = [];
  poolIOPSValues: string[] = [];
  poolCapacityValues: string[] = [];
  poolThroughputValues: string[] = [];
  showDeletionMessage = false;
  isClusterAdded = false;
  selectedQueries: any;
  PROMETHEUS_DELAY = 20000;
  LOAD_DELAY = 5000;
  CLUSTERS_REFRESH_INTERVAL = 30000;
  interval: NodeJS.Timer;
  selectedTime: any;
  multiClusterQueries: any = {};
  managedByConfig$: Observable<any>;
  clusterDetailsArray: any[];
  prometheusConnectionErrors: any[] = [];
  reconnectionError: string;

  get prometheusConnectionErrorTitle(): string {
    return this.isZhHans
      ? '无法从以下集群获取指标：'
      : 'Could not retrieve metrics from the following clusters:';
  }

  get clusterNameLabel(): string {
    return this.isZhHans ? '集群名称：' : 'Cluster Name:';
  }

  get clusterIdLabel(): string {
    return this.isZhHans ? '集群 ID：' : 'Cluster ID:';
  }

  get issueLabel(): string {
    return this.isZhHans ? '问题：' : 'Issue:';
  }

  get securityConfigurationErrorText(): string {
    return this.isZhHans ? '安全配置错误' : 'Security configuration error';
  }

  get delayedDeletionNoticeText(): string {
    return this.isZhHans
      ? '请注意，已断开集群的数据会继续显示约 5 分钟，之后会自动移除。'
      : 'Please note that the data for the disconnected cluster will be visible for a duration of ~ 5 minutes. After this period, it will be automatically removed.';
  }

  get topClusterUtilizationTitle(): string {
    return this.isZhHans
      ? `前 ${this.COUNT_OF_UTILIZATION_CHARTS} 个集群利用率`
      : `Top ${this.COUNT_OF_UTILIZATION_CHARTS} Cluster Utilization`;
  }

  get topPoolsUtilizationTitle(): string {
    return this.isZhHans
      ? `前 ${this.COUNT_OF_UTILIZATION_CHARTS} 个存储池利用率`
      : `Top ${this.COUNT_OF_UTILIZATION_CHARTS} Pools Utilization`;
  }

  get clusterUtilizationAriaLabel(): string {
    return this.isZhHans ? '集群利用率卡片' : 'Cluster Utilization card';
  }

  get poolsUtilizationAriaLabel(): string {
    return this.isZhHans ? '存储池利用率卡片' : 'Pools Utilization card';
  }

  get capacityChartTitle(): string {
    return this.isZhHans ? '容量' : 'Capacity';
  }

  get iopsChartTitle(): string {
    return this.isZhHans ? 'IOPS' : 'IOPS';
  }

  get throughputChartTitle(): string {
    return this.isZhHans ? '吞吐量' : 'Throughput';
  }

  get clientThroughputChartTitle(): string {
    return this.isZhHans ? '客户端吞吐量' : 'Client Throughput';
  }

  constructor(
    private multiClusterService: MultiClusterService,
    private settingsService: SettingsService,
    private modalService: ModalService,
    private router: Router,
    private prometheusService: PrometheusService,
    private notificationService: NotificationService,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    this.isZhHans = this.localeId.startsWith('zh');
    this.connectClusterTitle = this.isZhHans ? '接入集群' : 'Connect Cluster';
    this.connectClusterDescription = this.isZhHans
      ? '将当前集群接入多集群管理。点击“接入集群”按钮开始配置。'
      : 'Upgrade your current cluster to a multi-cluster setup effortlessly. Click on the "Connect Cluster" button to begin the process.';
    this.clusterManagedByText = this.isZhHans
      ? '当前集群已由以下集群管理：'
      : 'This cluster is already managed by cluster -';
    this.connectClusterButtonText = this.isZhHans ? '接入集群' : 'Connect Cluster';
    this.multiClusterQueries = {
      cluster: {
        queries: ClusterUltilizationQueries,
        selectedTime: this.prometheusService.lastHourDateObject
      },
      pool: {
        queries: PoolUltilizationQueries,
        selectedTime: this.prometheusService.lastHourDateObject
      },
      all: {
        queries: allQueries,
        selectedTime: this.prometheusService.lastHourDateObject
      }
    };
  }

  ngOnInit(): void {
    this.columns = [
      {
        prop: 'cluster',
        name: $localize`Cluster Name`,
        flexGrow: 2,
        cellTemplate: this.nameTpl
      },
      {
        prop: 'cluster_connection_status',
        name: $localize`Connection`,
        flexGrow: 2,
        cellTransformation: CellTemplate.badge,
        customTemplateConfig: {
          map: {
            1: { value: this.isZhHans ? '未连接' : 'DISCONNECTED', class: 'badge-danger' },
            0: { value: this.isZhHans ? '已连接' : 'CONNECTED', class: 'badge-success' },
            2: { value: this.isZhHans ? '检查中' : 'CHECKING..', class: 'badge-info' }
          }
        }
      },
      {
        prop: 'status',
        name: $localize`Status`,
        flexGrow: 1,
        cellTransformation: CellTemplate.badge,
        customTemplateConfig: {
          map: {
            1: { value: this.isZhHans ? '警告' : 'WARN', class: 'badge-warning' },
            0: { value: this.isZhHans ? '正常' : 'OK', class: 'badge-success' },
            2: { value: this.isZhHans ? '错误' : 'ERROR', class: 'badge-danger' }
          }
        }
      },
      { prop: 'alert', name: $localize`Alerts`, flexGrow: 1 },
      { prop: 'version', name: $localize`Version`, flexGrow: 2 },
      {
        prop: 'usage',
        name: $localize`Usage`,
        cellTemplate: this.clusterUsageTpl,
        flexGrow: 1
      },
      { prop: 'pools', name: $localize`Pools`, flexGrow: 1 },
      { prop: 'hosts', name: $localize`Hosts`, flexGrow: 1 },
      { prop: 'osds', name: $localize`OSDs`, flexGrow: 1 }
    ];

    this.subs.add(
      this.multiClusterService.subscribe((resp: any) => {
        this.isMultiCluster = Object.keys(resp['config']).length > 1;
        this.clusterDetailsArray = Object.values(resp['config']).flat();
        const hubUrl = resp['hub_url'];
        for (const key in resp['config']) {
          if (resp['config'].hasOwnProperty(key)) {
            const cluster = resp['config'][key][0];
            if (hubUrl === cluster.url) {
              this.localClusterName = cluster.name;
              break;
            }
          }
        }
      })
    );
    this.managedByConfig$ = this.settingsService.getValues('MANAGED_BY_CLUSTERS');
    this.subs.add(
      this.multiClusterService.subscribeClusterTokenStatus((resp: object) => {
        this.clusterTokenStatus = resp;
      })
    );

    this.isClusterAdded = this.multiClusterService.isClusterAdded();

    if (this.isClusterAdded) {
      setTimeout(() => {
        this.getPrometheusData(this.prometheusService.lastHourDateObject);
        this.multiClusterService.isClusterAdded(false);
      }, this.PROMETHEUS_DELAY);
    } else {
      this.showDeletionMessage = this.multiClusterService.showPrometheusDelayMessage();
      if (this.showDeletionMessage) {
        setTimeout(() => {
          this.getPrometheusData(this.prometheusService.lastHourDateObject);
        }, this.LOAD_DELAY);
      } else {
        this.getPrometheusData(this.prometheusService.lastHourDateObject);
      }
    }
  }

  openRemoteClusterInfoModal() {
    const initialState = {
      action: 'connect'
    };
    this.bsModalRef = this.modalService.show(MultiClusterFormComponent, initialState, {
      size: 'lg'
    });
    this.bsModalRef.componentInstance.submitAction.subscribe(() => {
      this.loading = true;
      setTimeout(() => {
        const currentRoute = this.router.url.split('?')[0];
        this.multiClusterService.refreshMultiCluster(currentRoute);
        this.getPrometheusData(this.prometheusService.lastHourDateObject);
      }, this.PROMETHEUS_DELAY);
    });
  }

  getPrometheusData(selectedTime: any, selectedQueries?: string) {
    const validRangeQueries = Object.keys(ClusterUltilizationQueries).concat(
      Object.keys(PoolUltilizationQueries)
    );

    const allMultiClusterQueries = Object.keys(allQueries).concat(
      Object.keys(ClusterUltilizationQueries).concat(Object.keys(PoolUltilizationQueries))
    );

    const validQueries = [
      'ALERTS',
      'MGR_METADATA',
      'HEALTH_STATUS',
      'TOTAL_CAPACITY',
      'USED_CAPACITY',
      'POOLS',
      'OSDS',
      'CLUSTER_CAPACITY_UTILIZATION',
      'CLUSTER_IOPS_UTILIZATION',
      'CLUSTER_THROUGHPUT_UTILIZATION',
      'POOL_CAPACITY_UTILIZATION',
      'POOL_IOPS_UTILIZATION',
      'POOL_THROUGHPUT_UTILIZATION',
      'HOSTS',
      'CLUSTER_ALERTS',
      'FEDERATE_UP_METRIC'
    ];

    let validSelectedQueries = allMultiClusterQueries;

    if (selectedQueries) {
      if (selectedQueries === 'poolUtilization') {
        this.multiClusterQueries.pool['selectedTime'] = selectedTime;
        validSelectedQueries = Object.keys(PoolUltilizationQueries);
      }

      if (selectedQueries === 'clusterUtilization') {
        this.multiClusterQueries.cluster.selectedTime = selectedTime;
        validSelectedQueries = Object.keys(ClusterUltilizationQueries);
      }
    }

    this.prometheusService
      .getMultiClusterQueriesData(
        this.queriesResults,
        validQueries,
        validRangeQueries,
        this.multiClusterQueries,
        validSelectedQueries,
        allMultiClusterQueries
      )
      .subscribe((data: any) => {
        this.queriesResults = data;
        this.loading = false;
        this.alerts = this.queriesResults.ALERTS;
        this.getAlertsInfo();
        this.getClustersInfo();
        clearInterval(this.interval);
        this.interval = setInterval(() => {
          this.getClustersInfo();
        }, this.CLUSTERS_REFRESH_INTERVAL);
      });
  }

  getAlertsInfo() {
    interface Alert {
      alertName: string;
      alertState: string;
      severity: string;
      cluster: string;
    }

    const alerts: Alert[] = [];

    this.alerts?.forEach((item: any) => {
      const metric = item.metric;
      const alert: Alert = {
        alertName: metric.alertname,
        cluster: metric.cluster,
        alertState: metric.alertstate,
        severity: metric.severity
      };
      alerts.push(alert);
    });

    this.alerts = alerts;
  }

  getClustersInfo() {
    interface ClusterInfo {
      cluster: string;
      status: number;
      alert: number;
      total_capacity: number;
      used_capacity: number;
      available_capacity: number;
      pools: number;
      osds: number;
      hosts: number;
      version: string;
      cluster_connection_status: number;
    }

    const clusters: ClusterInfo[] = [];
    const totalCapacityMetrics = Array.isArray(this.queriesResults?.TOTAL_CAPACITY)
      ? this.queriesResults.TOTAL_CAPACITY
      : [];

    totalCapacityMetrics.forEach((totalCapacityMetric: any, index: number) => {
      const clusterName = totalCapacityMetric.metric.cluster;
      const totalCapacity = parseInt(totalCapacityMetric.value[1]);
      const getMgrMetadata = this.findCluster(this.queriesResults?.MGR_METADATA, clusterName);
      const version = getMgrMetadata?.metric?.ceph_version
        ? this.getVersion(getMgrMetadata.metric.ceph_version)
        : '';

      const usedCapacity = this.findClusterData(this.queriesResults?.USED_CAPACITY, clusterName);
      const pools = this.findClusterData(this.queriesResults?.POOLS, clusterName);
      const hosts = this.findClusterData(this.queriesResults?.HOSTS, clusterName);
      const alert = this.findClusterData(this.queriesResults?.CLUSTER_ALERTS, clusterName);
      const osds = this.findClusterData(this.queriesResults?.OSDS, clusterName);
      const status = this.findClusterData(this.queriesResults?.HEALTH_STATUS, clusterName);
      const available_capacity = totalCapacity - usedCapacity;
      const federateJobName = `federate_${index + 1}`;
      const federateMetrics = Array.isArray(this.queriesResults?.FEDERATE_UP_METRIC)
        ? this.queriesResults.FEDERATE_UP_METRIC.filter(
            (metric: any) => metric.metric.job === federateJobName
          )
        : [];
      this.checkFederateMetricsStatus(federateMetrics);

      clusters.push({
        cluster: clusterName.trim(),
        status,
        alert,
        total_capacity: totalCapacity,
        used_capacity: usedCapacity,
        available_capacity: available_capacity,
        pools,
        osds,
        hosts,
        version,
        cluster_connection_status: 2
      });
    });

    if (this.clusterTokenStatus) {
      clusters.forEach((cluster: any) => {
        cluster.cluster_connection_status = this.clusterTokenStatus[cluster.cluster]?.status;
        if (cluster.cluster === this.localClusterName) {
          cluster.cluster_connection_status = 0;
        }
      });
      this.connectionErrorsCount = clusters.filter(
        (cluster) => cluster.cluster_connection_status === 1
      ).length;
    }

    this.clusters = clusters;

    // Generate labels and metrics for utilization charts
    this.capacityLabels = this.generateQueryLabel(this.queriesResults.CLUSTER_CAPACITY_UTILIZATION);
    this.iopsLabels = this.generateQueryLabel(this.queriesResults.CLUSTER_IOPS_UTILIZATION);
    this.throughputLabels = this.generateQueryLabel(
      this.queriesResults.CLUSTER_THROUGHPUT_UTILIZATION
    );
    this.poolCapacityLabels = this.generateQueryLabel(
      this.queriesResults.POOL_CAPACITY_UTILIZATION,
      true
    );
    this.poolIOPSLabels = this.generateQueryLabel(this.queriesResults.POOL_IOPS_UTILIZATION, true);
    this.poolThroughputLabels = this.generateQueryLabel(
      this.queriesResults.POOL_THROUGHPUT_UTILIZATION,
      true
    );

    this.capacityValues = this.getQueryValues(this.queriesResults.CLUSTER_CAPACITY_UTILIZATION);
    this.iopsValues = this.getQueryValues(this.queriesResults.CLUSTER_IOPS_UTILIZATION);
    this.throughputValues = this.getQueryValues(this.queriesResults.CLUSTER_THROUGHPUT_UTILIZATION);
    this.poolCapacityValues = this.getQueryValues(this.queriesResults.POOL_CAPACITY_UTILIZATION);
    this.poolIOPSValues = this.getQueryValues(this.queriesResults.POOL_IOPS_UTILIZATION);
    this.poolThroughputValues = this.getQueryValues(
      this.queriesResults.POOL_THROUGHPUT_UTILIZATION
    );
  }

  checkFederateMetricsStatus(federatedMetrics: any) {
    if (!federatedMetrics || federatedMetrics.length === 0) {
      return;
    }

    this.prometheusConnectionErrors = [];

    federatedMetrics.forEach((metricEntry: { metric: { instance: string }; value: any }) => {
      const instanceIpPort = metricEntry.metric.instance;
      const instanceIp = instanceIpPort.split(':')[0];
      const instancePort = instanceIpPort.split(':')[1];
      const federationStatus = metricEntry.value[1];

      this.clusterDetailsArray?.forEach((clusterDetails) => {
        if (clusterDetails.name !== this.localClusterName) {
          const prometheusUrl = clusterDetails.prometheus_url.replace(
            /^(http:\/\/|https:\/\/)/,
            ''
          );
          const prometheusIp = prometheusUrl.split(':')[0];
          const prometheusPort = prometheusUrl.split(':')[1] ? prometheusUrl.split(':')[1] : '443';

          const existingError = this.prometheusConnectionErrors.find(
            (errorEntry) => errorEntry.url === clusterDetails.url
          );

          if (
            !existingError &&
            instanceIp === prometheusIp &&
            instancePort === prometheusPort &&
            federationStatus === '0'
          ) {
            this.prometheusConnectionErrors.push({
              cluster_name: clusterDetails.name,
              cluster_alias: clusterDetails.cluster_alias,
              url: clusterDetails.url
            });

            this.multiClusterService
              .reConnectCluster(
                clusterDetails.url,
                clusterDetails.user,
                null,
                clusterDetails.ssl_verify,
                clusterDetails.ssl_certificate,
                clusterDetails.ttl,
                clusterDetails.token
              )
              .subscribe({
                error: (errorResponse: any) => {
                  const reconnectionError = errorResponse.error.detail;
                  const errorIndex = this.prometheusConnectionErrors.findIndex(
                    (errorEntry) => errorEntry.url === clusterDetails.url
                  );
                  if (errorIndex !== -1) {
                    this.prometheusConnectionErrors[
                      errorIndex
                    ].reconnectionError = reconnectionError;
                  }
                },
                next: (response: any) => {
                  if (response === true) {
                    const message = $localize`Cluster re-connected successfully`;
                    this.notificationService.show(NotificationType.success, message);

                    this.prometheusConnectionErrors = this.prometheusConnectionErrors.filter(
                      (errorEntry) => errorEntry.url !== clusterDetails.url
                    );
                  }
                }
              });
          }
        }
      });
    });
  }

  findClusterData(metrics: any, clusterName: string) {
    const clusterMetrics = this.findCluster(metrics, clusterName);
    return parseInt(clusterMetrics?.value[1] || 0);
  }

  findCluster(metrics: any, clusterName: string) {
    if (!Array.isArray(metrics)) {
      return undefined;
    }
    return metrics.find((metric: any) => metric?.metric?.cluster === clusterName);
  }

  getVersion(fullVersion: string) {
    const version = fullVersion.replace('ceph version ', '').split(' ');
    return version[0] + ' ' + version.slice(2, version.length).join(' ');
  }

  generateQueryLabel(query: any, name = false, count = this.COUNT_OF_UTILIZATION_CHARTS) {
    const normalizedQuery = Array.isArray(query) ? query : [];
    let labels = [];
    for (let i = 0; i < count; i++) {
      let label = '';
      if (normalizedQuery[i]) {
        label = normalizedQuery[i]?.metric?.cluster;
        if (name) label = normalizedQuery[i]?.metric?.name + ' - ' + label;
      }
      labels.push(label);
    }
    return labels;
  }

  getQueryValues(query: any, count = this.COUNT_OF_UTILIZATION_CHARTS) {
    const normalizedQuery = Array.isArray(query) ? query : [];
    let values = [];
    for (let i = 0; i < count; i++) {
      if (normalizedQuery[i]) values.push(normalizedQuery[i]?.values);
    }
    return values;
  }

  onDismissed() {
    this.showDeletionMessage = false;
    this.multiClusterService.showPrometheusDelayMessage(false);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    clearInterval(this.interval);
    this.prometheusService.unsubscribe();
  }
}
