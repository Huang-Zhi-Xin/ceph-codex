import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from '@angular/core';
import { BaseModal } from 'carbon-components-angular';
import { detect } from 'detect-browser';
import { Subscription } from 'rxjs';
import { UserService } from '~/app/shared/api/user.service';
import { AppConstants, USER } from '~/app/shared/constants/app.constants';
import { LocalStorage } from '~/app/shared/enum/local-storage-enum';
import { Permission } from '~/app/shared/models/permissions';
import { AuthStorageService } from '~/app/shared/services/auth-storage.service';
import { SummaryService } from '~/app/shared/services/summary.service';

@Component({
  selector: 'cd-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseModal implements OnInit, OnDestroy {
  modalVariables: any;
  versionNumber: string;
  backendVersion: string;
  subs: Subscription;
  userPermission: Permission;
  projectConstants: typeof AppConstants;
  hostAddr: string;
  copyright: string;
  managementNodeLabel: string;

  constructor(
    private summaryService: SummaryService,
    private userService: UserService,
    private authStorageService: AuthStorageService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    super();
    this.userPermission = this.authStorageService.getPermissions().user;
    this.managementNodeLabel = localeId.startsWith('zh') ? '管理节点' : 'Management Node';
  }

  ngOnInit() {
    this.projectConstants = AppConstants;
    this.hostAddr = window.location.hostname;
    this.modalVariables = this.setVariables();
    this.versionNumber = AppConstants.productVersion;
    this.backendVersion = AppConstants.baseVersion;
    this.subs = this.summaryService.subscribe((summary) => {
      this.hostAddr = summary.mgr_host.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '');
      this.backendVersion = summary.version.replace('ceph version ', '');
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  setVariables() {
    const NOT_AVAILABLE = $localize`Not available`;
    const project = {} as any;
    project.user = localStorage.getItem(LocalStorage.DASHBOARD_USRENAME);
    project.role = USER;
    if (this.userPermission.read) {
      this.userService.get(project.user).subscribe((data: any) => {
        project.role = data.roles;
      });
    }
    const browser = detect();
    project.browserName = browser && browser.name ? browser.name : NOT_AVAILABLE;
    project.browserVersion = browser && browser.version ? browser.version : NOT_AVAILABLE;
    project.browserOS = browser && browser.os ? browser.os : NOT_AVAILABLE;
    return project;
  }
}
