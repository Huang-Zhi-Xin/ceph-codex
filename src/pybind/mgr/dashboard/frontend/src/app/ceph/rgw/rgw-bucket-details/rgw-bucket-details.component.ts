import { ChangeDetectorRef, Component, Inject, Input, LOCALE_ID, OnChanges } from '@angular/core';

import { RgwBucketService } from '~/app/shared/api/rgw-bucket.service';

import * as xml2js from 'xml2js';
import { RgwRateLimitConfig } from '../models/rgw-rate-limit';

@Component({
  selector: 'cd-rgw-bucket-details',
  templateUrl: './rgw-bucket-details.component.html',
  styleUrls: ['./rgw-bucket-details.component.scss']
})
export class RgwBucketDetailsComponent implements OnChanges {
  @Input()
  selection: any;
  lifecycleProgress: { bucket: string; status: string; started: string };
  lifecycleProgressMap = new Map<string, { description: string; color: string }>([
    ['UNINITIAL', { description: $localize`The process has not run yet`, color: 'cool-gray' }],
    ['PROCESSING', { description: $localize`The process is currently running`, color: 'cyan' }],
    ['COMPLETE', { description: $localize`The process has completed`, color: 'green' }]
  ]);
  lifecycleFormat: 'json' | 'xml' = 'json';
  aclPermissions: Record<string, string[]> = {};
  replicationStatus = $localize`Disabled`;
  bucketRateLimit: RgwRateLimitConfig;
  isZhHans: boolean;

  get mfaDeleteLabel(): string {
    return this.isZhHans ? 'MFA 删除' : 'MFA Delete';
  }

  get indexTypeLabel(): string {
    return this.isZhHans ? '索引类型' : 'Index type';
  }

  get placementRuleLabel(): string {
    return this.isZhHans ? '放置规则' : 'Placement rule';
  }

  get lastModifiedLabel(): string {
    return this.isZhHans ? '最后修改时间' : 'Last modification time';
  }

  get maximumSizeLabel(): string {
    return this.isZhHans ? '最大大小' : 'Maximum size';
  }

  get maximumObjectsLabel(): string {
    return this.isZhHans ? '最大对象数' : 'Maximum objects';
  }

  get bucketPolicyLabel(): string {
    return this.isZhHans ? '桶策略' : 'Bucket policy';
  }

  get lifecycleProgressLabel(): string {
    return this.isZhHans ? '生命周期进度' : 'Lifecycle progress';
  }

  get replicationPolicyLabel(): string {
    return this.isZhHans ? '复制策略' : 'Replication policy';
  }

  get bucketOwnerLabel(): string {
    return this.isZhHans ? '桶所有者' : 'Bucket Owner';
  }

  get authenticatedUsersGroupLabel(): string {
    return this.isZhHans ? '已认证用户组' : 'Authenticated users group';
  }

  constructor(
    private rgwBucketService: RgwBucketService,
    private cd: ChangeDetectorRef,
    @Inject(LOCALE_ID) localeId: string
  ) {
    this.isZhHans = localeId.startsWith('zh');
  }

  ngOnChanges() {
    this.updateBucketDetails(this.extraxtDetailsfromResponse.bind(this));
  }

  parseXmlAcl(xml: any, bucketOwner: string): Record<string, string[]> {
    const parser = new xml2js.Parser({ explicitArray: false, trim: true });
    let data: Record<string, string[]> = {
      Owner: ['-'],
      AllUsers: ['-'],
      AuthenticatedUsers: ['-']
    };
    parser.parseString(xml, (err, result) => {
      if (err) return null;

      const xmlGrantees: any = result['AccessControlPolicy']['AccessControlList']['Grant'];
      if (Array.isArray(xmlGrantees)) {
        for (let i = 0; i < xmlGrantees.length; i++) {
          const grantee = xmlGrantees[i];
          if (grantee?.Grantee?.URI) {
            const granteeGroup = grantee.Grantee.URI.split('/').pop();
            if (data[granteeGroup].includes('-')) {
              data[granteeGroup] = [grantee?.Permission];
            } else {
              data[granteeGroup].push(grantee?.Permission);
            }
          }
          if (grantee?.Grantee?.ID && bucketOwner === grantee?.Grantee?.ID) {
            data['Owner'] = grantee?.Permission;
          }
        }
      } else {
        if (xmlGrantees?.Grantee?.ID && bucketOwner === xmlGrantees?.Grantee?.ID) {
          data['Owner'] = xmlGrantees?.Permission;
        }
      }
    });
    return data;
  }

  updateBucketDetails(cbFn: Function) {
    if (this.selection) {
      this.rgwBucketService.get(this.selection.bid).subscribe((bucket: object) => {
        bucket['lock_retention_period_days'] = this.rgwBucketService.getLockDays(bucket);
        this.selection = bucket;
        cbFn();
      });
    }
  }

  extraxtDetailsfromResponse() {
    this.aclPermissions = this.parseXmlAcl(this.selection.acl, this.selection.owner);
    if (this.selection.replication?.['Rule']?.['Status']) {
      this.replicationStatus = this.selection.replication?.['Rule']?.['Status'];
    }
    this.rgwBucketService.getBucketRateLimit(this.selection.bid).subscribe((resp: any) => {
      if (resp && resp.bucket_ratelimit !== undefined) {
        this.bucketRateLimit = resp.bucket_ratelimit;
      }
    });
    this.extractLifecycleDetails();
  }

  extractLifecycleDetails() {
    if (this.lifecycleFormat === 'json' && !this.selection.lifecycle) {
      this.selection.lifecycle = {};
    }
    if (this.selection.lifecycle_progress?.length > 0) {
      this.selection.lifecycle_progress.forEach(
        (progress: { bucket: string; status: string; started: string }) => {
          if (progress.bucket.includes(this.selection.bucket)) {
            this.lifecycleProgress = progress;
          }
        }
      );
    }
  }

  updateLifecycleFormatTo(format: 'json' | 'xml'): void {
    this.lifecycleFormat = format;
    this.cd.detectChanges();
  }
}
