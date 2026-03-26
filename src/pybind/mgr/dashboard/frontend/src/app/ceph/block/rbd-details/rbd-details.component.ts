import { Component, Inject, Input, LOCALE_ID, OnChanges, TemplateRef, ViewChild } from '@angular/core';

import { NgbNav } from '@ng-bootstrap/ng-bootstrap';

import { RbdFormModel } from '../rbd-form/rbd-form.model';

@Component({
  selector: 'cd-rbd-details',
  templateUrl: './rbd-details.component.html',
  styleUrls: ['./rbd-details.component.scss']
})
export class RbdDetailsComponent implements OnChanges {
  @Input()
  selection: RbdFormModel;
  @Input()
  images: any;

  @ViewChild('poolConfigurationSourceTpl', { static: true })
  poolConfigurationSourceTpl: TemplateRef<any>;

  @ViewChild(NgbNav, { static: true })
  nav: NgbNav;

  rbdDashboardUrl: string;
  isZhHans: boolean;

  get dataPoolLabel(): string {
    return this.isZhHans ? '数据池' : 'Data Pool';
  }

  get objectSizeLabel(): string {
    return this.isZhHans ? '对象大小' : 'Object size';
  }

  get totalProvisionedLabel(): string {
    return this.isZhHans ? '总已预配' : 'Total provisioned';
  }

  get stripingUnitLabel(): string {
    return this.isZhHans ? '条带单元' : 'Striping unit';
  }

  get stripingCountLabel(): string {
    return this.isZhHans ? '条带数量' : 'Striping count';
  }

  get blockNamePrefixLabel(): string {
    return this.isZhHans ? '块名称前缀' : 'Block name prefix';
  }

  get formatVersionLabel(): string {
    return this.isZhHans ? '格式版本' : 'Format Version';
  }

  get performanceTitle(): string {
    return this.isZhHans ? 'RBD 详情' : 'RBD details';
  }

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.isZhHans = localeId.startsWith('zh');
  }

  ngOnChanges() {
    if (this.selection) {
      this.rbdDashboardUrl = `rbd-details?var-pool=${this.selection['pool_name']}&var-image=${this.selection['name']}`;
    }
  }
}
