import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'cd-rgw-multisite-tabs',
  templateUrl: './rgw-multisite-tabs.component.html',
  styleUrls: ['./rgw-multisite-tabs.component.scss']
})
export class RgwMultisiteTabsComponent {
  configurationLabel: string;
  syncPolicyLabel: string;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    const isZhHans = localeId.startsWith('zh');
    this.configurationLabel = isZhHans ? '配置' : 'Configuration';
    this.syncPolicyLabel = isZhHans ? '同步策略' : 'Sync Policy';
  }
}
