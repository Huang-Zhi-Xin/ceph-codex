import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MgrModuleService } from '~/app/shared/api/mgr-module.service';

import { NotificationType } from '~/app/shared/enum/notification-type.enum';
import { DocService } from '~/app/shared/services/doc.service';
import { NotificationService } from '~/app/shared/services/notification.service';

@Component({
  selector: 'cd-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnDestroy, OnInit {
  isZhHans: boolean;
  header: string;
  message: string;
  section: string;
  sectionInfo: string;
  sectionInfoLabel: string;
  documentationHint: string;
  icon: string;
  docUrl: string;
  source: string;
  routerSubscription: Subscription;
  uiConfig: string;
  uiApiPath: string;
  buttonRoute: string;
  buttonName: string;
  buttonTitle: string;
  secondaryButtonRoute: string;
  secondaryButtonName: string;
  secondaryButtonTitle: string;
  module_name: string;
  navigateTo: string;
  component: string;

  constructor(
    private router: Router,
    private docService: DocService,
    private http: HttpClient,
    private notificationService: NotificationService,
    private mgrModuleService: MgrModuleService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    this.isZhHans = localeId.startsWith('zh');
    this.documentationHint = this.isZhHans
      ? '请参考文档，完成相关配置并启用'
      : 'Please consult the documentation on how to configure and enable the';
  }

  ngOnInit() {
    this.fetchData();
    this.routerSubscription = this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.fetchData();
      });
  }

  doConfigure() {
    this.http.post(`ui-api/${this.uiApiPath}/configure`, {}).subscribe({
      next: () => {
        this.notificationService.show(NotificationType.info, `Configuring ${this.component}`);
      },
      error: (error: any) => {
        this.notificationService.show(NotificationType.error, error);
      },
      complete: () => {
        setTimeout(() => {
          this.router.navigate([this.uiApiPath]);
          this.notificationService.show(NotificationType.success, `Configured ${this.component}`);
        }, 3000);
      }
    });
  }

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    event.returnValue = false;
  }

  fetchData() {
    try {
      this.router.onSameUrlNavigation = 'reload';
      this.message = this.translateMessage(history.state.message);
      this.header = this.translateHeader(history.state.header);
      this.section = history.state.section;
      this.sectionInfo = history.state.section_info;
      this.sectionInfoLabel = this.translateSectionInfo(history.state.section_info);
      this.icon = history.state.icon;
      this.source = history.state.source;
      this.uiConfig = history.state.uiConfig;
      this.uiApiPath = history.state.uiApiPath;
      this.buttonRoute = history.state.button_route;
      this.buttonName = history.state.button_name;
      this.buttonTitle = history.state.button_title;
      this.secondaryButtonRoute = history.state.secondary_button_route;
      this.secondaryButtonName = history.state.secondary_button_name;
      this.secondaryButtonTitle = history.state.secondary_button_title;
      this.module_name = history.state.module_name;
      this.navigateTo = history.state.navigate_to;
      this.component = history.state.component;
      this.docUrl = this.docService.urlGenerator(this.section);
    } catch (error) {
      this.router.navigate(['/error']);
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private translateHeader(header: string): string {
    if (!this.isZhHans || !header) {
      return header;
    }

    const headers: Record<string, string> = {
      'The Object Gateway Service is not configured': '对象网关服务未配置',
      'NFS-Ganesha is not configured': 'NFS-Ganesha 未配置',
      'Block Pool is not configured': '块存储池未配置',
      'Block Mirroring is not configured': '块存储镜像未配置',
      'NVMe/TCP Gateway not configured': 'NVMe/TCP 网关未配置'
    };

    return headers[header] || header;
  }

  private translateMessage(message: string): string {
    if (!this.isZhHans || !message) {
      return message;
    }

    const messages: Record<string, string> = {
      'No RGW service is running.': '当前没有运行中的 RGW 服务。',
      'No NFS-Ganesha service is running.': '当前没有运行中的 NFS-Ganesha 服务。',
      'No NVMe/TCP gateway service is running.': '当前没有运行中的 NVMe/TCP 网关服务。',
      'No block mirroring service is running.': '当前没有运行中的块存储镜像服务。'
    };

    return messages[message] || message;
  }

  private translateSectionInfo(sectionInfo: string): string {
    if (!this.isZhHans || !sectionInfo) {
      return sectionInfo;
    }

    const sectionInfoMap: Record<string, string> = {
      'Object Gateway': '对象网关',
      'NFS GANESHA': 'NFS-Ganesha',
      orchestrator: '管理编排器',
      Block: '块存储',
      'Block Mirroring': '块存储镜像',
      'NVMe/TCP Gateway': 'NVMe/TCP 网关'
    };

    return sectionInfoMap[sectionInfo] || sectionInfo;
  }

  enableModule(): void {
    this.mgrModuleService.updateModuleState(this.module_name, false, null, this.navigateTo);
  }
}
