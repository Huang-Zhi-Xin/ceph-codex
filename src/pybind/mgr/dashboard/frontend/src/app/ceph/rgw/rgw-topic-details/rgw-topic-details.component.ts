import { Component, Inject, Input, LOCALE_ID, OnChanges, SimpleChanges } from '@angular/core';

import { Topic } from '~/app/shared/models/topic.model';
import * as _ from 'lodash';

@Component({
  selector: 'cd-rgw-topic-details',
  templateUrl: './rgw-topic-details.component.html',
  styleUrls: ['./rgw-topic-details.component.scss']
})
export class RgwTopicDetailsComponent implements OnChanges {
  @Input()
  selection: Topic;
  policy: string | object = '{}';
  isZhHans: boolean;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.isZhHans = localeId.startsWith('zh');
  }

  get pushEndpointArgumentsLabel(): string {
    return this.isZhHans ? '推送端点参数' : 'Push endpoint arguments';
  }

  get pushEndpointTopicLabel(): string {
    return this.isZhHans ? '推送端点主题' : 'Push endpoint topic';
  }

  get pushEndpointLabel(): string {
    return this.isZhHans ? '推送端点' : 'Push endpoint';
  }

  get storedSecretLabel(): string {
    return this.isZhHans ? '存储密钥' : 'Stored secret';
  }

  get persistentQueueLabel(): string {
    return this.isZhHans ? '持久队列' : 'Persistent queue';
  }

  get timeToLiveLabel(): string {
    return this.isZhHans ? '生存时间' : 'Time to live';
  }

  get maxRetriesLabel(): string {
    return this.isZhHans ? '最大重试次数' : 'Max retries';
  }

  get retrySleepDurationLabel(): string {
    return this.isZhHans ? '重试休眠时长' : 'Retry sleep duration';
  }

  get opaqueDataLabel(): string {
    return this.isZhHans ? '不透明数据' : 'Opaque data';
  }

  get subscribedBucketsLabel(): string {
    return this.isZhHans ? '已订阅存储桶' : 'Subscribed buckets';
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selection'] && this.selection) {
      if (_.isString(this.selection.policy)) {
        try {
          this.policy = JSON.parse(this.selection.policy);
        } catch (e) {
          this.policy = '{}';
        }
      } else {
        this.policy = this.selection.policy || {};
      }
    }
  }
}
