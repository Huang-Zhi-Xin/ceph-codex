import { Component, Inject, Input, LOCALE_ID, OnChanges } from '@angular/core';

import _ from 'lodash';

@Component({
  selector: 'cd-configuration-details',
  templateUrl: './configuration-details.component.html',
  styleUrls: ['./configuration-details.component.scss']
})
export class ConfigurationDetailsComponent implements OnChanges {
  @Input()
  selection: any;
  isZhHans: boolean;
  flags = {
    runtime: $localize`The value can be updated at runtime.`,
    no_mon_update: $localize`Daemons/clients do not pull this value from the
      monitor config database. We disallow setting this option via 'ceph config
      set ...'. This option should be configured via ceph.conf or via the
      command line.`,
    startup: $localize`Option takes effect only during daemon startup.`,
    cluster_create: $localize`Option only affects cluster creation.`,
    create: $localize`Option only affects daemon creation.`
  };

  get longDescriptionLabel(): string {
    return this.isZhHans ? '详细描述' : 'Long description';
  }

  get currentValuesLabel(): string {
    return this.isZhHans ? '当前值' : 'Current values';
  }

  get daemonDefaultLabel(): string {
    return this.isZhHans ? '守护进程默认值' : 'Daemon default';
  }

  get runtimeEditableLabel(): string {
    return this.isZhHans ? '可在运行时更新（可编辑）' : 'Can be updated at runtime (editable)';
  }

  get enumValuesLabel(): string {
    return this.isZhHans ? '枚举值' : 'Enum values';
  }

  get seeAlsoLabel(): string {
    return this.isZhHans ? '另请参见' : 'See also';
  }

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.isZhHans = localeId.startsWith('zh');
  }

  ngOnChanges() {
    if (this.selection) {
      this.selection.services = _.split(this.selection.services, ',');
    }
  }
}
