import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import { Icons } from '~/app/shared/enum/icons.enum';

@Component({
  selector: 'cd-rgw-sync-metadata-info',
  templateUrl: './rgw-sync-metadata-info.component.html',
  styleUrls: ['./rgw-sync-metadata-info.component.scss']
})
export class RgwSyncMetadataInfoComponent {
  icons = Icons;
  align = 'top';
  isZhHans: boolean;
  @Input()
  metadataSyncInfo: any = {};

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.isZhHans = localeId.startsWith('zh');
  }

  get statusLabel(): string {
    return this.isZhHans ? '状态：' : 'Status:';
  }

  get noSyncLabel(): string {
    return this.isZhHans ? '未同步' : 'No Sync';
  }

  get metadataSyncStatusLabel(): string {
    return this.isZhHans ? '元数据同步状态：' : 'Metadata Sync Status:';
  }

  get lastSyncedLabel(): string {
    return this.isZhHans ? '上次同步：' : 'Last Synced:';
  }
}
