import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  Output
} from '@angular/core';
import { GlobalRateLimitConfig, RgwRateLimitConfig } from '../models/rgw-rate-limit';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import { CdFormBuilder } from '~/app/shared/forms/cd-form-builder';
import { CdValidators } from '~/app/shared/forms/cd-validators';
import { AbstractControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormatterService } from '~/app/shared/services/formatter.service';
import { RgwUserService } from '~/app/shared/api/rgw-user.service';
import { RgwBucketService } from '~/app/shared/api/rgw-bucket.service';
import _ from 'lodash';
import { NotificationService } from '~/app/shared/services/notification.service';
import { NotificationType } from '~/app/shared/enum/notification-type.enum';

@Component({
  selector: 'cd-rgw-rate-limit',
  templateUrl: './rgw-rate-limit.component.html',
  styleUrls: ['./rgw-rate-limit.component.scss']
})
export class RgwRateLimitComponent implements OnInit, AfterViewInit {
  globalRateLimit: GlobalRateLimitConfig['user_ratelimit' | 'bucket_ratelimit'];
  form: CdFormGroup;
  isZhHans: boolean;
  @Input() type: string;

  @Output() formValue = new EventEmitter();
  @Output() rateLimitFormGroup = new EventEmitter<FormGroup>();

  @Input()
  isEditing: boolean;

  @Input() id: string;

  bid: string;
  @Input() set allowBid(value: string) {
    this.bid = value;
    if (this.isEditing && !!this.bid && this.type == 'bucket') {
      this.getRateLimitFormValues();
    }
  }
  constructor(
    private formBuilder: CdFormBuilder,
    private rgwUserService: RgwUserService,
    private rgwBucketService: RgwBucketService,
    private notificationService: NotificationService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    this.isZhHans = localeId.startsWith('zh');
  }

  get legendLabel(): string {
    return this.isZhHans ? '速率限制' : 'Rate Limit';
  }

  get typeHelpText(): string {
    if (this.type === 'user') {
      return this.isZhHans
        ? '用户速率限制用于控制每个用户每分钟的最大读写操作次数和数据量。'
        : 'The User Rate Limit controls the max read/write operations and data per minute for each user.';
    }

    return this.isZhHans
      ? '桶速率限制用于控制每个桶每分钟的最大读写操作次数和数据量。'
      : 'The Bucket Rate Limit controls the max read/write operations and data per minute for each bucket.';
  }

  get globalRateLimitTitle(): string {
    return this.isZhHans ? '全局速率限制' : 'Global Rate Limit';
  }

  get enabledLabel(): string {
    return this.isZhHans ? '启用' : 'Enabled';
  }

  get enabledHelpText(): string {
    return this.isZhHans
      ? '切换以启用或禁用速率限制设置。'
      : 'Toggle to enable or disable the rate limit settings.';
  }

  get requiredText(): string {
    return this.isZhHans ? '此字段为必填项。' : 'This field is required.';
  }

  get invalidValueText(): string {
    return this.isZhHans ? '该值无效。' : 'The value is not valid.';
  }

  get positiveNumberText(): string {
    return this.isZhHans ? '请输入正数。' : 'Enter a positive number.';
  }

  get unlimitedReadOpsLabel(): string {
    return this.isZhHans ? '读操作次数不限' : 'Unlimited read ops';
  }

  get unlimitedReadOpsHelpText(): string {
    return this.isZhHans
      ? '勾选后允许不限次数的读操作。'
      : 'Select this box to allow unlimited read operations.';
  }

  get maxReadOpsLabel(): string {
    return this.isZhHans ? '最大读操作次数' : 'Maximum read ops';
  }

  get maxReadOpsHelpText(): string {
    return this.isZhHans
      ? '限制每个用户每分钟的读操作次数。'
      : 'Limits the number of read operations per minute for a user.';
  }

  get unlimitedWriteOpsLabel(): string {
    return this.isZhHans ? '写操作次数不限' : 'Unlimited write ops';
  }

  get unlimitedWriteOpsHelpText(): string {
    return this.isZhHans
      ? '勾选后允许不限次数的写操作。'
      : 'Select this box to allow unlimited write operations.';
  }

  get maxWriteOpsLabel(): string {
    return this.isZhHans ? '最大写操作次数' : 'Maximum write ops';
  }

  get maxWriteOpsHelpText(): string {
    return this.isZhHans
      ? '限制每个用户每分钟的写操作次数。'
      : 'Limits the number of write operations per minute for a user.';
  }

  get unlimitedReadBytesLabel(): string {
    return this.isZhHans ? '读取字节数不限' : 'Unlimited read bytes';
  }

  get unlimitedReadBytesHelpText(): string {
    return this.isZhHans
      ? '勾选后允许不限读取字节数。'
      : 'Select this box to allow unlimited read bytes.';
  }

  get maxReadBytesLabel(): string {
    return this.isZhHans ? '最大读取字节数' : 'Maximum read bytes';
  }

  get maxReadBytesHelpText(): string {
    return this.isZhHans
      ? '限制每个用户每分钟的读取字节数。'
      : 'Limits the number of read bytes per minute for a user.';
  }

  get unlimitedWriteBytesLabel(): string {
    return this.isZhHans ? '写入字节数不限' : 'Unlimited write bytes';
  }

  get unlimitedWriteBytesHelpText(): string {
    return this.isZhHans
      ? '勾选后允许不限写入字节数。'
      : 'Select this box to allow unlimited write bytes.';
  }

  get maxWriteBytesLabel(): string {
    return this.isZhHans ? '最大写入字节数' : 'Maximum write bytes';
  }

  get maxWriteBytesHelpText(): string {
    return this.isZhHans
      ? '限制每个用户每分钟的写入字节数。'
      : 'Limits the number of write bytes per minute for a user.';
  }

  ngOnInit(): void {
    // get the global rate Limit
    if (this.type === 'user') {
      this.rgwUserService.getGlobalUserRateLimit().subscribe(
        (data: GlobalRateLimitConfig) => {
          if (data && data.user_ratelimit !== undefined) {
            this.globalRateLimit = data.user_ratelimit;
          }
        },
        (error: any) => {
          this.notificationService.show(NotificationType.error, error);
        }
      );
      this.isEditing ? this.getRateLimitFormValues() : '';
    } else {
      this.rgwBucketService.getGlobalBucketRateLimit().subscribe(
        (data: GlobalRateLimitConfig) => {
          if (data && data.bucket_ratelimit !== undefined) {
            this.globalRateLimit = data.bucket_ratelimit;
          }
        },
        (error: any) => {
          this.notificationService.show(NotificationType.error, error);
        }
      );
    }
    // rate limit form
    this.form = this.formBuilder.group({
      rate_limit_enabled: [false],
      rate_limit_max_readOps_unlimited: [true],
      rate_limit_max_readOps: [
        null,
        [
          CdValidators.composeIf(
            {
              rate_limit_enabled: true,
              rate_limit_max_readOps_unlimited: false
            },
            [Validators.required, this.rateLimitIopmMaxSizeValidator]
          )
        ]
      ],
      rate_limit_max_writeOps_unlimited: [true],
      rate_limit_max_writeOps: [
        null,
        [
          CdValidators.composeIf(
            {
              rate_limit_enabled: true,
              rate_limit_max_writeOps_unlimited: false
            },
            [Validators.required, this.rateLimitIopmMaxSizeValidator]
          )
        ]
      ],
      rate_limit_max_readBytes_unlimited: [true],
      rate_limit_max_readBytes: [
        null,
        [
          CdValidators.composeIf(
            {
              rate_limit_enabled: true,
              rate_limit_max_readBytes_unlimited: false
            },
            [Validators.required, this.rateLimitBytesMaxSizeValidator]
          )
        ]
      ],
      rate_limit_max_writeBytes_unlimited: [true],
      rate_limit_max_writeBytes: [
        null,
        [
          CdValidators.composeIf(
            {
              rate_limit_enabled: true,
              rate_limit_max_writeBytes_unlimited: false
            },
            [Validators.required, this.rateLimitBytesMaxSizeValidator]
          )
        ]
      ]
    });
  }
  /**
   * Helper function to populate Form Values
   * when edit rate limit edit is called.
   */
  private populateFormValues(data: RgwRateLimitConfig) {
    this.form.get('rate_limit_enabled').setValue(data.enabled);
    this._setRateLimitProperty(
      'rate_limit_max_readBytes',
      'rate_limit_max_readBytes_unlimited',
      data.max_read_bytes
    );
    this._setRateLimitProperty(
      'rate_limit_max_writeBytes',
      'rate_limit_max_writeBytes_unlimited',
      data.max_write_bytes
    );
    this._setRateLimitProperty(
      'rate_limit_max_readOps',
      'rate_limit_max_readOps_unlimited',
      data.max_read_ops
    );
    this._setRateLimitProperty(
      'rate_limit_max_writeOps',
      'rate_limit_max_writeOps_unlimited',
      data.max_write_ops
    );
  }
  /**
   * Helper function to call api and get Rate Limit Values
   * on load for user and bucket
   */
  private getRateLimitFormValues() {
    if (this.type === 'user') {
      this.rgwUserService.getUserRateLimit(this.id).subscribe(
        (resp: GlobalRateLimitConfig) => {
          this.populateFormValues(resp.user_ratelimit);
        },
        (error: any) => {
          this.notificationService.show(NotificationType.error, error);
        }
      );
    } else {
      this.rgwBucketService.getBucketRateLimit(this.bid).subscribe(
        (resp: GlobalRateLimitConfig) => {
          this.populateFormValues(resp.bucket_ratelimit);
        },
        (error: any) => {
          this.notificationService.show(NotificationType.error, error);
        }
      );
    }
  }
  /**
   * Validate the rate limit bytes maximum size, e.g. 30, 1K, 30 PiB/m or 1.9 MiB/m.
   */
  rateLimitBytesMaxSizeValidator(control: AbstractControl): ValidationErrors | null {
    return new FormatterService().performValidation(
      control,
      '^(\\d+(\\.\\d+)?)\\s*(B/m|K(B|iB/m)?|M(B|iB/m)?|G(B|iB/m)?|T(B|iB/m)?|P(B|iB/m)?)?$',
      { rateByteMaxSize: true }
    );
  }
  /**
   * Validate the rate limit operations maximum size
   */
  rateLimitIopmMaxSizeValidator(control: AbstractControl): ValidationErrors | null {
    return new FormatterService().iopmMaxSizeValidator(control);
  }
  getRateLimitFormValue() {
    if (this._isRateLimitFormDirty()) return this._getRateLimitArgs();
    return null;
  }
  ngAfterViewInit() {
    this.rateLimitFormGroup.emit(this.form);
  }
  /**
   * Check if the user rate limit has been modified.
   * @return {Boolean} Returns TRUE if the user rate limit has been modified.
   */
  private _isRateLimitFormDirty(): boolean {
    return [
      'rate_limit_enabled',
      'rate_limit_max_readOps_unlimited',
      'rate_limit_max_readOps',
      'rate_limit_max_writeOps_unlimited',
      'rate_limit_max_writeOps',
      'rate_limit_max_readBytes_unlimited',
      'rate_limit_max_readBytes',
      'rate_limit_max_writeBytes_unlimited',
      'rate_limit_max_writeBytes'
    ].some((path) => {
      return this.form.get(path).dirty;
    });
  }
  /**
   * Helper function to get the arguments for the API request when the user
   * rate limit configuration has been modified.
   */
  private _getRateLimitArgs(): RgwRateLimitConfig {
    const result: RgwRateLimitConfig = {
      enabled: this.form.getValue('rate_limit_enabled'),
      max_read_ops: 0,
      max_write_ops: 0,
      max_read_bytes: 0,
      max_write_bytes: 0
    };
    if (!this.form.getValue('rate_limit_max_readOps_unlimited')) {
      result['max_read_ops'] = this.form.getValue('rate_limit_max_readOps');
    }
    if (!this.form.getValue('rate_limit_max_writeOps_unlimited')) {
      result['max_write_ops'] = this.form.getValue('rate_limit_max_writeOps');
    }
    if (!this.form.getValue('rate_limit_max_readBytes_unlimited')) {
      // Convert the given value to bytes.
      result['max_read_bytes'] = new FormatterService().toBytes(
        this.form.getValue('rate_limit_max_readBytes')
      );
    }
    if (!this.form.getValue('rate_limit_max_writeBytes_unlimited')) {
      result['max_write_bytes'] = new FormatterService().toBytes(
        this.form.getValue('rate_limit_max_writeBytes')
      );
    }
    return result;
  }

  /**
   * Helper function to map the values for the Rate Limit when the user
   * rate limit gets loaded for first time or edited.
   */

  private _setRateLimitProperty(rateLimitKey: string, unlimitedKey: string, property: number) {
    if (property === 0) {
      this.form.get(unlimitedKey).setValue(true);
      this.form.get(rateLimitKey).setValue('');
    } else {
      this.form.get(unlimitedKey).setValue(false);
      this.form.get(rateLimitKey).setValue(property);
    }
  }
}
