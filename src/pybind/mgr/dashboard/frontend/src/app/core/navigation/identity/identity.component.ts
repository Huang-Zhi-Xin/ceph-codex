import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

import { AuthService } from '~/app/shared/api/auth.service';
import { Icons } from '~/app/shared/enum/icons.enum';
import { AuthStorageService } from '~/app/shared/services/auth-storage.service';

@Component({
  selector: 'cd-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {
  sso: boolean;
  username: string;
  icons = Icons;
  isZhHans = false;
  loggedInAsLabel = 'Logged in as';
  changePasswordLabel = 'Change password';
  logoutLabel = 'Log out';
  loggedInUserLabel = 'Logged in user';

  constructor(
    private authStorageService: AuthStorageService,
    private authService: AuthService,
    @Inject(LOCALE_ID) private localeId: string
  ) {}

  ngOnInit() {
    this.username = this.authStorageService.getUsername();
    this.sso = this.authStorageService.isSSO();
    this.isZhHans = this.localeId.startsWith('zh');
    this.loggedInAsLabel = this.isZhHans ? '当前登录用户' : 'Logged in as';
    this.changePasswordLabel = this.isZhHans ? '修改密码' : 'Change password';
    this.logoutLabel = this.isZhHans ? '退出登录' : 'Log out';
    this.loggedInUserLabel = this.isZhHans ? '当前登录用户' : 'Logged in user';
  }

  logout() {
    this.authService.logout();
  }
}
