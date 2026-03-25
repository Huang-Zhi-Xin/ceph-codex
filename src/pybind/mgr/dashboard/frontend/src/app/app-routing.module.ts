import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import _ from 'lodash';

import { CephfsListComponent } from './ceph/cephfs/cephfs-list/cephfs-list.component';
import { ConfigurationFormComponent } from './ceph/cluster/configuration/configuration-form/configuration-form.component';
import { ConfigurationComponent } from './ceph/cluster/configuration/configuration.component';
import { CreateClusterComponent } from './ceph/cluster/create-cluster/create-cluster.component';
import { CrushmapComponent } from './ceph/cluster/crushmap/crushmap.component';
import { HostFormComponent } from './ceph/cluster/hosts/host-form/host-form.component';
import { HostsComponent } from './ceph/cluster/hosts/hosts.component';
import { InventoryComponent } from './ceph/cluster/inventory/inventory.component';
import { LogsComponent } from './ceph/cluster/logs/logs.component';
import { MgrModuleFormComponent } from './ceph/cluster/mgr-modules/mgr-module-form/mgr-module-form.component';
import { MgrModuleListComponent } from './ceph/cluster/mgr-modules/mgr-module-list/mgr-module-list.component';
import { MonitorComponent } from './ceph/cluster/monitor/monitor.component';
import { OsdFormComponent } from './ceph/cluster/osd/osd-form/osd-form.component';
import { OsdListComponent } from './ceph/cluster/osd/osd-list/osd-list.component';
import { ActiveAlertListComponent } from './ceph/cluster/prometheus/active-alert-list/active-alert-list.component';
import { RulesListComponent } from './ceph/cluster/prometheus/rules-list/rules-list.component';
import { SilenceFormComponent } from './ceph/cluster/prometheus/silence-form/silence-form.component';
import { SilenceListComponent } from './ceph/cluster/prometheus/silence-list/silence-list.component';
import { ServiceFormComponent } from './ceph/cluster/services/service-form/service-form.component';
import { ServicesComponent } from './ceph/cluster/services/services.component';
import { DashboardComponent } from './ceph/dashboard/dashboard/dashboard.component';
import { NfsFormComponent } from './ceph/nfs/nfs-form/nfs-form.component';
import { PerformanceCounterComponent } from './ceph/performance-counter/performance-counter/performance-counter.component';
import { LoginPasswordFormComponent } from './core/auth/login-password-form/login-password-form.component';
import { LoginComponent } from './core/auth/login/login.component';
import { UserPasswordFormComponent } from './core/auth/user-password-form/user-password-form.component';
import { ErrorComponent } from './core/error/error.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { LoginLayoutComponent } from './core/layouts/login-layout/login-layout.component';
import { WorkbenchLayoutComponent } from './core/layouts/workbench-layout/workbench-layout.component';
import { ApiDocsComponent } from './core/navigation/api-docs/api-docs.component';
import { ActionLabels, URLVerbs } from './shared/constants/app.constants';
import { CrudFormComponent } from './shared/forms/crud-form/crud-form.component';
import { CRUDTableComponent } from './shared/datatable/crud-table/crud-table.component';
import { BreadcrumbsResolver, IBreadcrumb } from './shared/models/breadcrumbs';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ChangePasswordGuardService } from './shared/services/change-password-guard.service';
import { FeatureTogglesGuardService } from './shared/services/feature-toggles-guard.service';
import { ModuleStatusGuardService } from './shared/services/module-status-guard.service';
import { NoSsoGuardService } from './shared/services/no-sso-guard.service';
import { UpgradeComponent } from './ceph/cluster/upgrade/upgrade.component';
import { CephfsVolumeFormComponent } from './ceph/cephfs/cephfs-form/cephfs-form.component';
import { UpgradeProgressComponent } from './ceph/cluster/upgrade/upgrade-progress/upgrade-progress.component';
import { MultiClusterComponent } from './ceph/cluster/multi-cluster/multi-cluster.component';
import { MultiClusterListComponent } from './ceph/cluster/multi-cluster/multi-cluster-list/multi-cluster-list.component';
import { MultiClusterDetailsComponent } from './ceph/cluster/multi-cluster/multi-cluster-details/multi-cluster-details.component';
import { SmbClusterFormComponent } from './ceph/smb/smb-cluster-form/smb-cluster-form.component';
import { SmbShareFormComponent } from './ceph/smb/smb-share-form/smb-share-form.component';
import { SmbJoinAuthFormComponent } from './ceph/smb/smb-join-auth-form/smb-join-auth-form.component';
import { SmbUsersgroupsFormComponent } from './ceph/smb/smb-usersgroups-form/smb-usersgroups-form.component';
import { NfsClusterComponent } from './ceph/nfs/nfs-cluster/nfs-cluster.component';
import { SmbClusterListComponent } from './ceph/smb/smb-cluster-list/smb-cluster-list.component';
import { SmbJoinAuthListComponent } from './ceph/smb/smb-join-auth-list/smb-join-auth-list.component';
import { SmbUsersgroupsListComponent } from './ceph/smb/smb-usersgroups-list/smb-usersgroups-list.component';
import { SmbOverviewComponent } from './ceph/smb/smb-overview/smb-overview.component';

@Injectable()
export class PerformanceCounterBreadcrumbsResolver extends BreadcrumbsResolver {
  resolve(route: ActivatedRouteSnapshot) {
    const result: IBreadcrumb[] = [];

    const fromPath = route.queryParams.fromLink || null;
    let fromText = '';
    switch (fromPath) {
      case '/monitor':
        fromText = '监视器';
        break;
      case '/hosts':
        fromText = '主机';
        break;
    }
    result.push({ text: '集群', path: null });
    result.push({ text: fromText, path: fromPath });
    result.push({ text: '性能计数器', path: '' });

    return result;
  }
}

@Injectable()
export class StartCaseBreadcrumbsResolver extends BreadcrumbsResolver {
  resolve(route: ActivatedRouteSnapshot) {
    const path = route.params.name;
    const text = _.startCase(path);
    return [{ text: `${text}/Edit`, path: path }];
  }
}

const routes: Routes = [
  // Dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'api-docs', component: ApiDocsComponent },
  {
    path: '',
    component: WorkbenchLayoutComponent,
    canActivate: [AuthGuardService, ChangePasswordGuardService],
    canActivateChild: [AuthGuardService, ChangePasswordGuardService],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'error', component: ErrorComponent },

      // Cluster
      {
        path: 'expand-cluster',
        component: CreateClusterComponent,
        canActivate: [ModuleStatusGuardService],
        data: {
          moduleStatusGuardConfig: {
            uiApiPath: 'orchestrator',
            redirectTo: 'dashboard',
            backend: 'cephadm'
          },
          breadcrumbs: '集群/扩容集群'
        }
      },
      {
        path: 'hosts',
        component: HostsComponent,
        data: { breadcrumbs: '集群/主机' },
        children: [
          {
            path: URLVerbs.ADD,
            component: HostFormComponent,
            outlet: 'modal'
          }
        ]
      },
      {
        path: 'ceph-users',
        component: CRUDTableComponent,
        data: {
          breadcrumbs: '管理/存储用户',
          resource: 'api.cluster.user@1.0'
        }
      },
      {
        path: 'cluster/user/create',
        component: CrudFormComponent,
        data: {
          breadcrumbs: '管理/存储用户/创建',
          resource: 'api.cluster.user@1.0'
        }
      },
      {
        path: 'cluster/user/import',
        component: CrudFormComponent,
        data: {
          breadcrumbs: '管理/存储用户/导入',
          resource: 'api.cluster.user@1.0'
        }
      },
      {
        path: 'cluster/user/edit',
        component: CrudFormComponent,
        data: {
          breadcrumbs: '管理/存储用户/编辑',
          resource: 'api.cluster.user@1.0'
        }
      },
      {
        path: 'monitor',
        component: MonitorComponent,
        data: { breadcrumbs: '集群/监视器' }
      },
      {
        path: 'services',
        component: ServicesComponent,
        canActivate: [ModuleStatusGuardService],
        data: {
          moduleStatusGuardConfig: {
            uiApiPath: 'orchestrator',
            redirectTo: 'error',
            section: 'orch',
            section_info: '编排器',
            header: '编排器不可用'
          },
          breadcrumbs: '管理/服务'
        },
        children: [
          {
            path: URLVerbs.CREATE,
            component: ServiceFormComponent,
            outlet: 'modal'
          },
          {
            path: `${URLVerbs.CREATE}/:type`,
            component: ServiceFormComponent,
            outlet: 'modal'
          },
          {
            path: `${URLVerbs.EDIT}/:type/:name`,
            component: ServiceFormComponent,
            outlet: 'modal'
          }
        ]
      },
      {
        path: 'multi-cluster',
        children: [
          {
            path: 'overview',
            component: MultiClusterComponent
          },
          {
            path: 'manage-clusters',
            component: MultiClusterListComponent,
            data: {
              breadcrumbs: '多集群/管理集群'
            },
            children: [
              {
                path: 'performance-details',
                component: MultiClusterDetailsComponent
              }
            ]
          }
        ]
      },
      {
        path: 'inventory',
        canActivate: [ModuleStatusGuardService],
        component: InventoryComponent,
        data: {
          moduleStatusGuardConfig: {
            uiApiPath: 'orchestrator',
            redirectTo: 'error',
            section: 'orch',
            section_info: '编排器',
            header: '编排器不可用'
          },
          breadcrumbs: '集群/物理磁盘'
        }
      },
      {
        path: 'osd',
        data: { breadcrumbs: '集群/OSD' },
        children: [
          { path: '', component: OsdListComponent },
          {
            path: URLVerbs.CREATE,
            component: OsdFormComponent,
            data: { breadcrumbs: ActionLabels.CREATE }
          }
        ]
      },
      {
        path: 'configuration',
        data: { breadcrumbs: '管理/配置' },
        children: [
          { path: '', component: ConfigurationComponent },
          {
            path: 'edit/:name',
            component: ConfigurationFormComponent,
            data: { breadcrumbs: ActionLabels.EDIT }
          }
        ]
      },
      {
        path: 'crush-map',
        component: CrushmapComponent,
        data: { breadcrumbs: '集群/CRUSH 图' }
      },
      {
        path: 'logs',
        component: LogsComponent,
        data: { breadcrumbs: '可观测性/日志' }
      },
      {
        path: 'monitoring',
        data: { breadcrumbs: '可观测性/告警' },
        children: [
          { path: '', redirectTo: 'active-alerts', pathMatch: 'full' },
          {
            path: 'active-alerts',
            data: { breadcrumbs: '活动告警' },
            component: ActiveAlertListComponent
          },
          {
            path: 'alerts',
            data: { breadcrumbs: '告警规则' },
            component: RulesListComponent
          },
          {
            path: 'silences',
            data: { breadcrumbs: '静默规则' },
            children: [
              {
                path: '',
                component: SilenceListComponent
              },
              {
                path: URLVerbs.CREATE,
                component: SilenceFormComponent,
                data: { breadcrumbs: '创建静默规则' }
              },
              {
                path: `${URLVerbs.CREATE}/:id`,
                component: SilenceFormComponent,
                data: { breadcrumbs: ActionLabels.CREATE }
              },
              {
                path: `${URLVerbs.EDIT}/:id`,
                component: SilenceFormComponent,
                data: { breadcrumbs: ActionLabels.EDIT }
              },
              {
                path: `${URLVerbs.RECREATE}/:id`,
                component: SilenceFormComponent,
                data: { breadcrumbs: ActionLabels.RECREATE }
              }
            ]
          }
        ]
      },
      {
        path: 'upgrade',
        canActivate: [ModuleStatusGuardService],
        data: {
          moduleStatusGuardConfig: {
            uiApiPath: 'orchestrator',
            redirectTo: 'error',
            backend: 'cephadm',
            section: 'orch',
            section_info: '编排器',
            header: '编排器不可用'
          },
          breadcrumbs: '管理/升级'
        },
        children: [
          {
            path: '',
            component: UpgradeComponent
          },
          {
            path: 'progress',
            component: UpgradeProgressComponent,
            data: { breadcrumbs: '进度' }
          }
        ]
      },
      {
        path: 'perf_counters/:type/:id',
        component: PerformanceCounterComponent,
        data: {
          breadcrumbs: PerformanceCounterBreadcrumbsResolver
        }
      },
      // Mgr modules
      {
        path: 'mgr-modules',
        data: { breadcrumbs: '管理/管理器模块' },
        children: [
          {
            path: '',
            component: MgrModuleListComponent
          },
          {
            path: 'edit/:name',
            component: MgrModuleFormComponent,
            data: {
              breadcrumbs: StartCaseBreadcrumbsResolver
            }
          }
        ]
      },
      // Pools
      {
        path: 'pool',
        data: { breadcrumbs: '集群/存储池' },
        loadChildren: () => import('./ceph/pool/pool.module').then((m) => m.RoutedPoolModule)
      },
      // Block
      {
        path: 'block',
        data: { breadcrumbs: true, text: '块设备', path: null },
        loadChildren: () => import('./ceph/block/block.module').then((m) => m.RoutedBlockModule)
      },
      // File Systems
      {
        path: 'cephfs',
        canActivate: [FeatureTogglesGuardService],
        children: [
          {
            path: 'fs',
            component: CephfsListComponent,
            data: { breadcrumbs: '文件存储/文件系统' }
          },
          {
            path: `fs/${URLVerbs.CREATE}`,
            component: CephfsVolumeFormComponent,
            data: { breadcrumbs: ActionLabels.CREATE }
          },
          {
            path: `fs/${URLVerbs.EDIT}/:id`,
            component: CephfsVolumeFormComponent,
            data: { breadcrumbs: ActionLabels.EDIT }
          },
          {
            path: 'nfs',
            canActivateChild: [FeatureTogglesGuardService, ModuleStatusGuardService],
            data: {
              moduleStatusGuardConfig: {
                uiApiPath: 'nfs-ganesha',
                redirectTo: 'error',
                section: 'nfs-ganesha',
                section_info: 'NFS GANESHA',
                header: 'NFS-Ganesha 未配置'
              },
              breadcrumbs: '文件存储/NFS'
            },
            children: [
              { path: '', component: NfsClusterComponent },
              {
                path: `${URLVerbs.CREATE}/:fs_name/:subvolume_group`,
                component: NfsFormComponent,
                data: { breadcrumbs: ActionLabels.CREATE }
              },
              {
                path: `${URLVerbs.CREATE}`,
                component: NfsFormComponent,
                data: { breadcrumbs: ActionLabels.CREATE }
              },
              {
                path: `${URLVerbs.EDIT}/:cluster_id/:export_id`,
                component: NfsFormComponent,
                data: { breadcrumbs: ActionLabels.EDIT }
              }
            ]
          },
          {
            path: 'smb',
            canActivate: [ModuleStatusGuardService],
            data: {
              moduleStatusGuardConfig: {
                uiApiPath: 'smb',
                redirectTo: 'error',
                header: 'SMB 模块未启用',
                module_name: 'smb',
                navigate_to: 'cephfs/smb'
              },
              breadcrumbs: '文件存储/SMB'
            },
            children: [
              { path: '', component: SmbClusterListComponent },
              {
                path: 'cluster',
                data: { breadcrumbs: '集群' },
                children: [
                  { path: '', component: SmbClusterListComponent },
                  {
                    path: `${URLVerbs.CREATE}`,
                    component: SmbClusterFormComponent,
                    data: { breadcrumbs: ActionLabels.CREATE }
                  },
                  {
                    path: `${URLVerbs.EDIT}/:cluster_id`,
                    component: SmbClusterFormComponent,
                    data: { breadcrumbs: ActionLabels.EDIT }
                  }
                ]
              },
              {
                path: 'active-directory',
                data: { breadcrumbs: '活动目录' },
                children: [
                  { path: '', component: SmbJoinAuthListComponent },
                  {
                    path: `${URLVerbs.CREATE}`,
                    component: SmbJoinAuthFormComponent,
                    data: { breadcrumbs: ActionLabels.CREATE }
                  },
                  {
                    path: `${URLVerbs.EDIT}/:authId`,
                    component: SmbJoinAuthFormComponent,
                    data: { breadcrumbs: ActionLabels.EDIT }
                  }
                ]
              },
              {
                path: 'standalone',
                data: { breadcrumbs: '独立模式' },
                children: [
                  { path: '', component: SmbUsersgroupsListComponent },
                  {
                    path: `${URLVerbs.CREATE}`,
                    component: SmbUsersgroupsFormComponent,
                    data: { breadcrumbs: ActionLabels.CREATE }
                  },
                  {
                    path: `${URLVerbs.EDIT}/:usersGroupsId`,
                    component: SmbUsersgroupsFormComponent
                  }
                ]
              },
              {
                path: 'overview',
                component: SmbOverviewComponent,
                data: { breadcrumbs: '概览' }
              },
              {
                path: `share/${URLVerbs.CREATE}/:clusterId`,
                component: SmbShareFormComponent,
                data: { breadcrumbs: ActionLabels.CREATE }
              },
              {
                path: `share/${URLVerbs.EDIT}/:clusterId/:shareId`,
                component: SmbShareFormComponent,
                data: { breadcrumbs: ActionLabels.EDIT }
              }
            ]
          }
        ]
      },
      // Object Gateway
      {
        path: 'rgw',
        canActivate: [FeatureTogglesGuardService, ModuleStatusGuardService],
        data: {
          moduleStatusGuardConfig: {
            uiApiPath: 'rgw',
            redirectTo: 'error',
            section: 'rgw',
            section_info: 'Object Gateway',
            header: 'The Object Gateway Service is not configured'
          },
          breadcrumbs: true,
          text: '对象存储',
          path: null
        },
        loadChildren: () => import('./ceph/rgw/rgw.module').then((m) => m.RoutedRgwModule)
      },
      // User/Role Management
      {
        path: 'user-management',
        data: { breadcrumbs: '用户管理', path: null },
        loadChildren: () => import('./core/auth/auth.module').then((m) => m.RoutedAuthModule)
      },
      // User Profile
      {
        path: 'user-profile',
        data: { breadcrumbs: '用户资料', path: null },
        children: [
          {
            path: URLVerbs.EDIT,
            component: UserPasswordFormComponent,
            canActivate: [NoSsoGuardService],
            data: { breadcrumbs: ActionLabels.EDIT }
          }
        ]
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'login-change-password',
        component: LoginPasswordFormComponent,
        canActivate: [NoSsoGuardService]
      }
    ]
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [{ path: '**', redirectTo: '/error' }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
  providers: [StartCaseBreadcrumbsResolver, PerformanceCounterBreadcrumbsResolver]
})
export class AppRoutingModule {}
