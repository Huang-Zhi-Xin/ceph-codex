import { Component, Inject, LOCALE_ID } from '@angular/core';

import { Permission } from '~/app/shared/models/permissions';
import { AuthStorageService } from '~/app/shared/services/auth-storage.service';

@Component({
  selector: 'cd-rbd-tabs',
  templateUrl: './rbd-tabs.component.html',
  styleUrls: ['./rbd-tabs.component.scss']
})
export class RbdTabsComponent {
  grafanaPermission: Permission;
  url: string;
  imagesLabel: string;
  namespacesLabel: string;
  trashLabel: string;
  performanceLabel: string;

  constructor(
    private authStorageService: AuthStorageService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    this.grafanaPermission = this.authStorageService.getPermissions().grafana;
    const isZhHans = localeId.startsWith('zh');
    this.imagesLabel = isZhHans ? '映像' : 'Images';
    this.namespacesLabel = isZhHans ? '命名空间' : 'Namespaces';
    this.trashLabel = isZhHans ? '回收站' : 'Trash';
    this.performanceLabel = isZhHans ? '总体性能' : 'Overall Performance';
  }
}
