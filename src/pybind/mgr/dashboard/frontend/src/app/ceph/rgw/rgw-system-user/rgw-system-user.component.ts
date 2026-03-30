import { Component, EventEmitter, Inject, LOCALE_ID, Output } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RgwZoneService } from '~/app/shared/api/rgw-zone.service';
import { ActionLabelsI18n } from '~/app/shared/constants/app.constants';
import { NotificationType } from '~/app/shared/enum/notification-type.enum';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import { NotificationService } from '~/app/shared/services/notification.service';

@Component({
  selector: 'cd-rgw-system-user',
  templateUrl: './rgw-system-user.component.html',
  styleUrls: ['./rgw-system-user.component.scss']
})
export class RgwSystemUserComponent {
  multisiteSystemUserForm: CdFormGroup;
  zoneName: string;
  isZhHans: boolean;

  @Output()
  submitAction = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    public actionLabels: ActionLabelsI18n,
    public rgwZoneService: RgwZoneService,
    public notificationService: NotificationService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    this.isZhHans = localeId.startsWith('zh');
    this.createForm();
  }

  get formTitle(): string {
    return this.isZhHans ? '创建系统用户' : 'Create System User';
  }

  get userNameLabel(): string {
    return this.isZhHans ? '用户名' : 'User Name';
  }

  get userNamePlaceholder(): string {
    return this.isZhHans ? '用户名...' : 'User name...';
  }

  get requiredText(): string {
    return this.isZhHans ? '此字段为必填项。' : 'This field is required.';
  }

  get duplicateNameText(): string {
    return this.isZhHans ? '所选 Realm 名称已被使用。' : 'The chosen realm name is already in use.';
  }

  createForm() {
    this.multisiteSystemUserForm = new CdFormGroup({
      userName: new UntypedFormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  submit() {
    const userName = this.multisiteSystemUserForm.getValue('userName');
    this.rgwZoneService.createSystemUser(userName, this.zoneName).subscribe(() => {
      this.submitAction.emit();
      this.notificationService.show(
        NotificationType.success,
        $localize`User: '${this.multisiteSystemUserForm.getValue('userName')}' created successfully`
      );
      this.activeModal.close();
    });
  }
}
