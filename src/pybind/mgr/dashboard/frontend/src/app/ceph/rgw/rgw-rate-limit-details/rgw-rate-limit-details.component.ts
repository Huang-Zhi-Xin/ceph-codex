import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import { RgwRateLimitConfig } from '../models/rgw-rate-limit';

@Component({
  selector: 'cd-rgw-rate-limit-details',
  templateUrl: './rgw-rate-limit-details.component.html',
  styleUrls: ['./rgw-rate-limit-details.component.scss']
})
export class RgwRateLimitDetailsComponent {
  @Input() rateLimitConfig: RgwRateLimitConfig;
  @Input() type: string;
  isZhHans: boolean;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.isZhHans = localeId.startsWith('zh');
  }

  get legendLabel(): string {
    return this.type === 'user'
      ? this.isZhHans
        ? '用户速率限制'
        : 'User Rate Limit'
      : this.isZhHans
        ? '桶速率限制'
        : 'Bucket Rate Limit';
  }

  get maxReadOpsLabel(): string {
    return this.isZhHans ? '最大读操作次数' : 'Maximum Read Ops';
  }

  get maxWriteOpsLabel(): string {
    return this.isZhHans ? '最大写操作次数' : 'Maximum Write Ops';
  }

  get maxReadBytesLabel(): string {
    return this.isZhHans ? '最大读取字节数' : 'Maximum Read Bytes';
  }

  get maxWriteBytesLabel(): string {
    return this.isZhHans ? '最大写入字节数' : 'Maximum Write Bytes';
  }

  get unlimitedLabel(): string {
    return this.isZhHans ? '不限' : 'Unlimited';
  }
}
