import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import {
  TableModule,
  ButtonModule,
  IconModule,
  IconService,
  CheckboxModule,
  PaginationModule,
  ThemeModule,
  DialogModule,
  SelectModule,
  TagModule,
  LayerModule
} from 'carbon-components-angular';
import AddIcon from '@carbon/icons/es/add/16';
import FilterIcon from '@carbon/icons/es/filter/16';
import ReloadIcon from '@carbon/icons/es/renew/16';
import DataTableIcon from '@carbon/icons/es/data-table/16';
import CheckIcon from '@carbon/icons/es/checkmark/16';
import CloseIcon from '@carbon/icons/es/close/16';
import MaximizeIcon from '@carbon/icons/es/maximize/16';
import ArrowDown from '@carbon/icons/es/caret--down/16';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { CRUDTableComponent } from './crud-table/crud-table.component';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { TableKeyValueComponent } from './table-key-value/table-key-value.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableComponent } from './table/table.component';
import { CrudFormComponent } from '../forms/crud-form/crud-form.component';
import { FormlyArrayTypeComponent } from '../forms/crud-form/formly-array-type/formly-array-type.component';
import { FormlyInputTypeComponent } from '../forms/crud-form/formly-input-type/formly-input-type.component';
import { FormlyObjectTypeComponent } from '../forms/crud-form/formly-object-type/formly-object-type.component';
import { FormlyTextareaTypeComponent } from '../forms/crud-form/formly-textarea-type/formly-textarea-type.component';
import { FormlyInputWrapperComponent } from '../forms/crud-form/formly-input-wrapper/formly-input-wrapper.component';
import { FormlyFileTypeComponent } from '../forms/crud-form/formly-file-type/formly-file-type.component';
import { FormlyFileValueAccessorDirective } from '../forms/crud-form/formly-file-type/formly-file-type-accessor';
import { CheckedTableFormComponent } from './checked-table-form/checked-table-form.component';
import { TableDetailDirective } from './directives/table-detail.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbTooltipModule,
    PipesModule,
    ComponentsModule,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'array', component: FormlyArrayTypeComponent },
        { name: 'object', component: FormlyObjectTypeComponent },
        { name: 'input', component: FormlyInputTypeComponent, wrappers: ['input-wrapper'] },
        { name: 'textarea', component: FormlyTextareaTypeComponent, wrappers: ['input-wrapper'] },
        { name: 'file', component: FormlyFileTypeComponent, wrappers: ['input-wrapper'] }
      ],
      validationMessages: [
        { name: 'required', message: $localize`这是必填字段！` },
        { name: 'json', message: $localize`该字段不是有效的 JSON 文档` },
        {
          name: 'rgwRoleName',
          message: $localize`角色名称只能包含字母、数字或特殊字符 "_+=,.@-"（模式：[0-9a-zA-Z_+=,.@-]+）`
        },
        {
          name: 'rgwRolePath',
          message: $localize`角色路径必须以斜杠 "/" 开始并以斜杠 "/" 结束`
        },
        { name: 'file_size', message: $localize`文件大小不能超过 4KiB` },
        {
          name: 'rgwRoleSessionDuration',
          message: $localize`该字段必须为数字，且取值范围应在 1 小时到 12 小时之间`
        }
      ],
      wrappers: [{ name: 'input-wrapper', component: FormlyInputWrapperComponent }]
    }),
    FormlyBootstrapModule,
    TableModule,
    ButtonModule,
    IconModule,
    CheckboxModule,
    PaginationModule,
    DialogModule,
    ThemeModule,
    SelectModule,
    TagModule,
    LayerModule
  ],
  declarations: [
    TableComponent,
    TableKeyValueComponent,
    TableActionsComponent,
    CRUDTableComponent,
    TablePaginationComponent,
    CrudFormComponent,
    FormlyArrayTypeComponent,
    FormlyInputTypeComponent,
    FormlyObjectTypeComponent,
    FormlyInputWrapperComponent,
    FormlyFileTypeComponent,
    FormlyFileValueAccessorDirective,
    CheckedTableFormComponent,
    TableDetailDirective
  ],
  exports: [
    TableComponent,
    TableKeyValueComponent,
    TableActionsComponent,
    CRUDTableComponent,
    TablePaginationComponent,
    CheckedTableFormComponent,
    TableDetailDirective
  ]
})
export class DataTableModule {
  constructor(private iconService: IconService) {
    this.iconService.registerAll([
      AddIcon,
      FilterIcon,
      ReloadIcon,
      DataTableIcon,
      CheckIcon,
      CloseIcon,
      MaximizeIcon,
      ArrowDown
    ]);
  }
}
