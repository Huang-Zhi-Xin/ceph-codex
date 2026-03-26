import { Injectable } from '@angular/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CrudTaskInfo, JsonFormUISchema } from '../forms/crud-form/crud-form.model';
import { setupValidators } from '../forms/crud-form/helpers';

@Injectable({
  providedIn: 'root'
})
export class CrudFormAdapterService {
  constructor(private formlyJsonschema: FormlyJsonschema) {}

  private translateClusterUserText(value?: string): string | undefined {
    const translations: Record<string, string> = {
      'Create User': $localize`创建存储用户`,
      'Edit User': $localize`编辑存储用户`,
      'Import User': $localize`导入存储用户`,
      'User entity': $localize`用户实体`,
      Entity: $localize`实体`,
      Capabilities: $localize`权限配置`,
      'Entity Capabilities': $localize`实体权限`,
      'User file import': $localize`导入用户文件`
    };

    return value ? translations[value] || value : value;
  }

  private translateClusterUserFields(controlSchema: FormlyFieldConfig[]) {
    const visit = (field?: FormlyFieldConfig) => {
      if (!field) {
        return;
      }

      if (field.props) {
        field.props.label = this.translateClusterUserText(field.props.label as string);
        field.props.placeholder = this.translateClusterUserText(field.props.placeholder as string);
      }

      if (field.fieldGroup) {
        field.fieldGroup.forEach(visit);
      }

      if (field.fieldArray && typeof field.fieldArray !== 'function') {
        visit(field.fieldArray);
      }
    };

    controlSchema.forEach(visit);
  }

  processJsonSchemaForm(response: any, path: string): JsonFormUISchema {
    let form = 0;
    while (form < response.forms.length) {
      if (response.forms[form].path == path) {
        break;
      }
      form++;
    }
    form %= response.forms.length;
    const title = response.forms[form].control_schema.title;
    const uiSchema = response.forms[form].ui_schema;
    const cSchema = response.forms[form].control_schema;
    let controlSchema = this.formlyJsonschema.toFieldConfig(cSchema).fieldGroup;
    for (let i = 0; i < controlSchema.length; i++) {
      for (let j = 0; j < uiSchema.length; j++) {
        if (controlSchema[i].key == uiSchema[j].key) {
          controlSchema[i].props.templateOptions = uiSchema[j].templateOptions;
          controlSchema[i].props.readonly = uiSchema[j].readonly;
          setupValidators(controlSchema[i], uiSchema);
        }
      }
    }
    let taskInfo: CrudTaskInfo = {
      metadataFields: response.forms[form].task_info.metadataFields,
      message: response.forms[form].task_info.message
    };
    const methodType = response.forms[form].method_type;
    const model = response.forms[form].model || {};
    let translatedTitle = title;

    if (path.startsWith('/cluster/user/')) {
      translatedTitle = this.translateClusterUserText(title) || title;
      this.translateClusterUserFields(controlSchema);
    }

    return { title: translatedTitle, uiSchema, controlSchema, taskInfo, methodType, model };
  }
}
