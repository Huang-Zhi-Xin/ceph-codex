import { Component, EventEmitter, Inject, LOCALE_ID, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RgwMultisiteService } from '~/app/shared/api/rgw-multisite.service';
import { RgwRealmService } from '~/app/shared/api/rgw-realm.service';
import { RgwZoneService } from '~/app/shared/api/rgw-zone.service';
import { RgwZonegroupService } from '~/app/shared/api/rgw-zonegroup.service';
import { ActionLabelsI18n } from '~/app/shared/constants/app.constants';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import { ModalService } from '~/app/shared/services/modal.service';
import { NotificationService } from '~/app/shared/services/notification.service';
import { RgwRealm, RgwZonegroup, RgwZone, SystemKey } from '../models/rgw-multisite';
import { NotificationType } from '~/app/shared/enum/notification-type.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cd-create-rgw-service-entities',
  templateUrl: './create-rgw-service-entities.component.html',
  styleUrls: ['./create-rgw-service-entities.component.scss']
})
export class CreateRgwServiceEntitiesComponent {
  public sub = new Subscription();
  createMultisiteEntitiesForm: CdFormGroup;
  realm: RgwRealm;
  zonegroup: RgwZonegroup;
  zone: RgwZone;
  isZhHans = false;

  @Output()
  submitAction = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal,
    public actionLabels: ActionLabelsI18n,
    public rgwMultisiteService: RgwMultisiteService,
    public rgwZoneService: RgwZoneService,
    public notificationService: NotificationService,
    public rgwZonegroupService: RgwZonegroupService,
    public rgwRealmService: RgwRealmService,
    public modalService: ModalService,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    this.isZhHans = this.localeId.startsWith('zh');
    this.createForm();
  }

  get formTitle(): string {
    return this.isZhHans ? '创建 Realm/Zone Group/Zone' : 'Create Realm/Zone Group/Zone';
  }

  get defaultMasterNotice(): string {
    return this.isZhHans
      ? '新建的 realm/zone group/zone 将被设为默认且为 master。'
      : 'The realm/zone group/zone created will be set as default and master.';
  }

  get realmNamePlaceholder(): string {
    return this.isZhHans ? 'Realm 名称...' : 'Realm name...';
  }

  get zoneGroupNamePlaceholder(): string {
    return this.isZhHans ? 'Zone Group 名称...' : 'Zone group name...';
  }

  get zoneNamePlaceholder(): string {
    return this.isZhHans ? 'Zone 名称...' : 'Zone name...';
  }

  get submitText(): string {
    return this.isZhHans ? '创建' : this.actionLabels.CREATE;
  }

  createForm() {
    this.createMultisiteEntitiesForm = new CdFormGroup({
      realmName: new FormControl(null, {
        validators: [Validators.required]
      }),
      zonegroupName: new FormControl(null, {
        validators: [Validators.required]
      }),
      zoneName: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  submit() {
    const values = this.createMultisiteEntitiesForm.value;
    this.realm = new RgwRealm();
    this.realm.name = values['realmName'];
    this.zonegroup = new RgwZonegroup();
    this.zonegroup.name = values['zonegroupName'];
    this.zonegroup.endpoints = '';
    this.zone = new RgwZone();
    this.zone.name = values['zoneName'];
    this.zone.endpoints = '';
    this.zone.system_key = new SystemKey();
    this.zone.system_key.access_key = '';
    this.zone.system_key.secret_key = '';
    this.rgwRealmService
      .create(this.realm, true)
      .toPromise()
      .then(() => {
        this.rgwZonegroupService
          .create(this.realm, this.zonegroup, true, true)
          .toPromise()
          .then(() => {
            this.rgwZoneService
              .create(this.zone, this.zonegroup, true, true, this.zone.endpoints)
              .toPromise()
              .then(() => {
                this.notificationService.show(
                  NotificationType.success,
                  $localize`Realm/Zonegroup/Zone created successfully`
                );
                this.submitAction.emit();
                this.activeModal.close();
              })
              .catch(() => {
                this.notificationService.show(
                  NotificationType.error,
                  $localize`Realm/Zonegroup/Zone creation failed`
                );
              });
          });
      });
  }
}
