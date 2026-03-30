import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'cd-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {
  isZhHans: boolean;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.isZhHans = localeId.startsWith('zh');
  }

  get productName(): string {
    return 'KX Storage';
  }

  get subtitle(): string {
    return this.isZhHans ? '分布式存储管理系统' : 'Distributed Storage Management System';
  }
}
