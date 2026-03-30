import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import { Icons } from '~/app/shared/enum/icons.enum';

@Component({
  selector: 'cd-rgw-sync-data-info',
  templateUrl: './rgw-sync-data-info.component.html',
  styleUrls: ['./rgw-sync-data-info.component.scss']
})
export class RgwSyncDataInfoComponent {
  icons = Icons;
  align = 'top';
  isZhHans: boolean;
  @Input()
  zone: any = {};
  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.isZhHans = localeId.startsWith('zh');
  }

  get statusLabel(): string {
    return this.isZhHans ? '状态：' : 'Status:';
  }

  get lastSyncedLabel(): string {
    return this.isZhHans ? '上次同步：' : 'Last Synced:';
  }
}
