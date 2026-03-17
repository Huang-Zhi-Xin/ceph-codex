import { Component, Inject, LOCALE_ID } from '@angular/core';

import { Permission } from '~/app/shared/models/permissions';
import { AuthStorageService } from '~/app/shared/services/auth-storage.service';

@Component({
  selector: 'cd-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {
  userPermission: Permission;
  settingsLabel: string;
  userManagementLabel: string;

  constructor(
    private authStorageService: AuthStorageService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    const permissions = this.authStorageService.getPermissions();
    this.userPermission = permissions.user;
    const isZhHans = localeId.startsWith('zh');
    this.settingsLabel = isZhHans ? '系统设置' : 'System Settings';
    this.userManagementLabel = isZhHans ? '用户管理' : 'User management';
  }
}
