import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'cd-rgw-user-tabs',
  templateUrl: './rgw-user-tabs.component.html',
  styleUrls: ['./rgw-user-tabs.component.scss']
})
export class RgwUserTabsComponent {
  isZhHans: boolean;
  usersLabel: string;
  accountsLabel: string;
  rolesLabel: string;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.isZhHans = localeId.startsWith('zh');
    this.usersLabel = this.isZhHans ? '用户' : 'Users';
    this.accountsLabel = this.isZhHans ? '账号' : 'Accounts';
    this.rolesLabel = this.isZhHans ? '角色' : 'Roles';
  }
}
