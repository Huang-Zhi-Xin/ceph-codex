import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const SMB_PATH = 'cephfs/smb';

enum TABS {
  cluster = 'cluster',
  activeDirectory = 'active-directory',
  standalone = 'standalone',
  overview = 'overview'
}

@Component({
  selector: 'cd-smb-tabs',
  templateUrl: './smb-tabs.component.html',
  styleUrls: ['./smb-tabs.component.scss']
})
export class SmbTabsComponent implements OnInit {
  selectedTab: TABS;
  activeTab: TABS = TABS.cluster;
  isZhHans = false;
  clusterLabel = 'Cluster';
  activeDirectoryLabel = 'Active Directory';
  standaloneLabel = 'Standalone';
  overviewLabel = 'Overview';

  constructor(private router: Router, @Inject(LOCALE_ID) private localeId: string) {
    this.isZhHans = this.localeId.startsWith('zh');
    this.clusterLabel = this.isZhHans ? '集群' : 'Cluster';
    this.activeDirectoryLabel = this.isZhHans ? '活动目录' : 'Active Directory';
    this.standaloneLabel = this.isZhHans ? '独立模式' : 'Standalone';
    this.overviewLabel = this.isZhHans ? '概览' : 'Overview';
  }

  ngOnInit(): void {
    const currentPath = this.router.url;
    this.activeTab = Object.values(TABS).find((tab) => currentPath.includes(tab)) || TABS.cluster;
  }

  onSelected(tab: TABS) {
    this.selectedTab = tab;
    this.router.navigate([`${SMB_PATH}/${tab}`]);
  }

  public get Tabs(): typeof TABS {
    return TABS;
  }
}
