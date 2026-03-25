import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'cd-nvmeof-tabs',
  templateUrl: './nvmeof-tabs.component.html',
  styleUrls: ['./nvmeof-tabs.component.scss']
})
export class NvmeofTabsComponent {
  subsystemsLabel: string;
  gatewaysLabel: string;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    const isZhHans = localeId.startsWith('zh');
    this.subsystemsLabel = isZhHans ? '子系统' : 'Subsystems';
    this.gatewaysLabel = isZhHans ? '网关' : 'Gateways';
  }
}
