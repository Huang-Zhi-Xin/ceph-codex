import { Component, Inject, LOCALE_ID } from '@angular/core';

import { NgbPopoverConfig, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { I18n } from 'carbon-components-angular/i18n';

@Component({
  selector: 'cd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    popoverConfig: NgbPopoverConfig,
    tooltipConfig: NgbTooltipConfig,
    i18n: I18n,
    @Inject(LOCALE_ID) localeId: string
  ) {
    popoverConfig.autoClose = 'outside';
    popoverConfig.container = 'body';
    popoverConfig.placement = 'bottom';

    tooltipConfig.container = 'body';

    if (localeId.startsWith('zh')) {
      i18n.setLocale('zh', {
        SEARCH: {
          LABEL: '搜索',
          PLACEHOLDER: '搜索',
          CLEAR_BUTTON: '清除搜索内容'
        },
        PAGINATION: {
          ITEMS_PER_PAGE: '每页条目数：',
          OPEN_LIST_OF_OPTIONS: '打开选项列表',
          BACKWARD: '上一页',
          FORWARD: '下一页',
          TOTAL_ITEMS_UNKNOWN: '{{start}}-{{end}} 条',
          TOTAL_ITEMS: '{{start}}-{{end}} / 共 {{total}} 条',
          TOTAL_ITEM: '{{start}}-{{end}} / 共 {{total}} 条',
          PAGE: '页',
          OF_LAST_PAGES: '/ 共 {{last}} 页',
          OF_LAST_PAGE: '/ 共 {{last}} 页',
          NEXT: '下一页',
          PREVIOUS: '上一页',
          SELECT_ARIA: '选择页码'
        }
      } as any);
    }
  }
}
