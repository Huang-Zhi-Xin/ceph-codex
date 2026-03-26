import { Component, Inject, Input, LOCALE_ID } from '@angular/core';

import { Permissions } from '~/app/shared/models/permissions';

@Component({
  selector: 'cd-host-details',
  templateUrl: './host-details.component.html',
  styleUrls: ['./host-details.component.scss']
})
export class HostDetailsComponent {
  @Input()
  permissions: Permissions;

  @Input()
  selection: any;

  hostDetailsTitle: string;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.hostDetailsTitle = localeId.startsWith('zh') ? '主机详情' : 'Host details';
  }

  get selectedHostname(): string {
    return this.selection !== undefined ? this.selection['hostname'] : null;
  }
}
