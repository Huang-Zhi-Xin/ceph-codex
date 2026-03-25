import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'cd-iscsi-tabs',
  templateUrl: './iscsi-tabs.component.html',
  styleUrls: ['./iscsi-tabs.component.scss']
})
export class IscsiTabsComponent {
  overviewLabel: string;
  targetsLabel: string;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    const isZhHans = localeId.startsWith('zh');
    this.overviewLabel = isZhHans ? '概览' : 'Overview';
    this.targetsLabel = isZhHans ? '目标' : 'Targets';
  }
}
