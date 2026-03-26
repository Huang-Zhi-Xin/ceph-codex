import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  UntypedFormControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

import { BaseModal, ModalService } from 'carbon-components-angular';
import { Subject } from 'rxjs';

import { Pool } from '~/app/ceph/pool/pool';
import { PoolService } from '~/app/shared/api/pool.service';
import { RbdService } from '~/app/shared/api/rbd.service';
import { ActionLabelsI18n } from '~/app/shared/constants/app.constants';
import { NotificationType } from '~/app/shared/enum/notification-type.enum';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import { FinishedTask } from '~/app/shared/models/finished-task';
import { Permission } from '~/app/shared/models/permissions';
import { AuthStorageService } from '~/app/shared/services/auth-storage.service';
import { NotificationService } from '~/app/shared/services/notification.service';

@Component({
  selector: 'cd-rbd-namespace-form-modal',
  templateUrl: './rbd-namespace-form-modal.component.html',
  styleUrls: ['./rbd-namespace-form-modal.component.scss']
})
export class RbdNamespaceFormModalComponent extends BaseModal implements OnInit {
  poolPermission: Permission;
  pools: Array<Pool> = null;
  pool: string;
  namespace: string;

  namespaceForm: CdFormGroup;

  editing = false;
  isZhHans = false;

  public onSubmit: Subject<void> = new Subject();

  constructor(
    public actionLabels: ActionLabelsI18n,
    private authStorageService: AuthStorageService,
    private notificationService: NotificationService,
    private poolService: PoolService,
    private rbdService: RbdService,
    protected modalService: ModalService,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    super();
    this.isZhHans = this.localeId.startsWith('zh');
    this.poolPermission = this.authStorageService.getPermissions().pool;
    this.createForm();
  }

  get modalTitle(): string {
    return this.isZhHans ? '创建命名空间' : 'Create Namespace';
  }

  get poolLabel(): string {
    return this.isZhHans ? '存储池' : 'Pool';
  }

  get loadingText(): string {
    return this.isZhHans ? '加载中...' : 'Loading...';
  }

  get noRbdPoolsText(): string {
    return this.isZhHans ? '-- 无可用 rbd 存储池 --' : '-- No rbd pools available --';
  }

  get selectPoolText(): string {
    return this.isZhHans ? '-- 选择存储池 --' : '-- Select a pool --';
  }

  get namespacePlaceholder(): string {
    return this.isZhHans ? '命名空间名称...' : 'Namespace name...';
  }

  get submitText(): string {
    return this.isZhHans ? '创建' : this.actionLabels.CREATE;
  }

  createForm() {
    this.namespaceForm = new CdFormGroup(
      {
        pool: new UntypedFormControl(''),
        namespace: new UntypedFormControl('')
      },
      this.validator(),
      this.asyncValidator()
    );
  }

  validator(): ValidatorFn {
    return (control: AbstractControl) => {
      const poolCtrl = control.get('pool');
      const namespaceCtrl = control.get('namespace');
      let poolErrors = null;
      if (!poolCtrl.value) {
        poolErrors = { required: true };
      }
      poolCtrl.setErrors(poolErrors);
      let namespaceErrors = null;
      if (!namespaceCtrl.value) {
        namespaceErrors = { required: true };
      }
      namespaceCtrl.setErrors(namespaceErrors);
      return null;
    };
  }

  asyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve) => {
        const poolCtrl = control.get('pool');
        const namespaceCtrl = control.get('namespace');
        this.rbdService.listNamespaces(poolCtrl.value).subscribe((namespaces: any[]) => {
          if (namespaces.some((ns) => ns.namespace === namespaceCtrl.value)) {
            const error = { namespaceExists: true };
            namespaceCtrl.setErrors(error);
            resolve(error);
          } else {
            resolve(null);
          }
        });
      });
    };
  }

  ngOnInit() {
    if (this.poolPermission.read) {
      this.poolService.list(['pool_name', 'type', 'application_metadata']).then((resp) => {
        const pools: Pool[] = [];
        for (const pool of resp) {
          if (this.rbdService.isRBDPool(pool) && pool.type === 'replicated') {
            pools.push(pool);
          }
        }
        this.pools = pools;
        if (this.pools.length === 1) {
          const poolName = this.pools[0]['pool_name'];
          this.namespaceForm.get('pool').setValue(poolName);
        }
      });
    }
  }

  submit() {
    const pool = this.namespaceForm.getValue('pool');
    const namespace = this.namespaceForm.getValue('namespace');
    const finishedTask = new FinishedTask();
    finishedTask.name = 'rbd/namespace/create';
    finishedTask.metadata = {
      pool: pool,
      namespace: namespace
    };
    this.rbdService
      .createNamespace(pool, namespace)
      .toPromise()
      .then(() => {
        this.modalService.destroy();
        this.notificationService.show(
          NotificationType.success,
          $localize`Created namespace '${pool}/${namespace}'`
        );
        this.onSubmit.next();
      })
      .catch(() => {
        this.namespaceForm.setErrors({ cdSubmitButton: true });
      });
  }
}
