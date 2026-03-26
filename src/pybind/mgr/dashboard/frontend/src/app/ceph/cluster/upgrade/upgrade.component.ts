import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subscription, of } from 'rxjs';
import { catchError, shareReplay, switchMap } from 'rxjs/operators';
import { DaemonService } from '~/app/shared/api/daemon.service';
import { HealthService } from '~/app/shared/api/health.service';
import { UpgradeService } from '~/app/shared/api/upgrade.service';
import { Icons } from '~/app/shared/enum/icons.enum';
import { NotificationType } from '~/app/shared/enum/notification-type.enum';
import { CdTableColumn } from '~/app/shared/models/cd-table-column';
import { Daemon } from '~/app/shared/models/daemon.interface';
import { Permission } from '~/app/shared/models/permissions';
import { UpgradeInfoInterface } from '~/app/shared/models/upgrade.interface';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from '~/app/shared/services/notification.service';
import { SummaryService } from '~/app/shared/services/summary.service';
import { ExecutingTask } from '~/app/shared/models/executing-task';
import { Router } from '@angular/router';
import { RefreshIntervalService } from '~/app/shared/services/refresh-interval.service';
import { AppConstants } from '~/app/shared/constants/app.constants';

@Component({
  selector: 'cd-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit, OnDestroy {
  version: string;
  backendVersion: string;
  info$: Observable<UpgradeInfoInterface>;
  permission: Permission;
  healthData$: Observable<any>;
  daemons$: Observable<Daemon[]>;
  fsid$: Observable<any>;
  modalRef: NgbModalRef;
  upgradableVersions: string[];
  errorMessage: string;
  executingTasks: ExecutingTask;
  interval = new Subscription();

  columns: CdTableColumn[] = [];

  icons = Icons;
  releaseImage = AppConstants.releaseImage;
  imageRegistry = AppConstants.imageRegistry;
  isZhHans: boolean;
  newVersionAriaLabel: string;
  clusterStatusAriaLabel: string;
  mgrCountAriaLabel: string;
  upgradeNowAriaLabel: string;
  minimumMgrTooltip: string;

  upgradeStatus$: Observable<any>;
  subject = new ReplaySubject<any>();
  private subs = new Subscription();

  constructor(
    private summaryService: SummaryService,
    private upgradeService: UpgradeService,
    private healthService: HealthService,
    private daemonService: DaemonService,
    private notificationService: NotificationService,
    private router: Router,
    private refreshIntervalService: RefreshIntervalService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    this.isZhHans = localeId.startsWith('zh');
    this.newVersionAriaLabel = this.isZhHans ? '新版本' : 'New Version';
    this.clusterStatusAriaLabel = this.isZhHans ? '集群状态' : 'Cluster Status';
    this.mgrCountAriaLabel = this.isZhHans ? 'MGR 数量' : 'MGR Count';
    this.upgradeNowAriaLabel = this.isZhHans ? '立即升级' : 'Upgrade now';
    this.minimumMgrTooltip = this.isZhHans
      ? '升级至少需要 2 个 mgr 守护进程。'
      : 'To upgrade, you need minimum 2 mgr daemons.';
  }

  ngOnInit(): void {
    this.upgradeStatus$ = this.subject.pipe(
      switchMap(() => this.upgradeService.status()),
      shareReplay(1)
    );

    this.columns = [
      {
        name: $localize`Daemon name`,
        prop: 'daemon_name',
        flexGrow: 1,
        filterable: true
      },
      {
        name: $localize`Version`,
        prop: 'version',
        flexGrow: 1,
        filterable: true
      }
    ];

    this.subs.add(
      this.summaryService.subscribe((summary) => {
        this.version = AppConstants.productVersion;
        this.backendVersion = summary.version.replace('ceph version ', '');
        this.executingTasks = summary.executing_tasks.filter((tasks) =>
          tasks.name.includes('progress/Upgrade')
        )[0];
      })
    );

    this.interval = this.refreshIntervalService.intervalData$.subscribe(() => {
      this.fetchStatus();
    });

    this.info$ = this.upgradeService.listCached().pipe(
      catchError((err) => {
        err.preventDefault();
        this.errorMessage = $localize`Not retrieving upgrades`;
        this.notificationService.show(
          NotificationType.error,
          this.errorMessage,
          err.error.detail || err.error.message
        );
        return of(null);
      })
    );

    this.healthData$ = this.healthService.getMinimalHealth();
    this.daemons$ = this.daemonService.list(this.upgradeService.upgradableServiceTypes);
    this.fsid$ = this.healthService.getClusterFsid();
  }

  startUpgradeModal() {
    this.modalRef = this.upgradeService.startUpgradeModal();
  }

  fetchStatus() {
    this.subject.next();
  }

  upgradeNow(version: string) {
    this.upgradeService.start(version).subscribe({
      error: (error) => {
        this.notificationService.show(
          NotificationType.error,
          $localize`Failed to start the upgrade`,
          error
        );
      },
      complete: () => {
        this.notificationService.show(
          NotificationType.success,
          $localize`Started upgrading the cluster`
        );
        this.fetchStatus();
        this.router.navigate(['/upgrade/progress']);
      }
    });
  }

  ngOnDestroy() {
    this.interval?.unsubscribe();
    this.subs?.unsubscribe();
  }
}
