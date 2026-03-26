import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

import { BaseModal } from 'carbon-components-angular';

import { Pool } from '~/app/ceph/pool/pool';
import { PoolService } from '~/app/shared/api/pool.service';
import { RbdService } from '~/app/shared/api/rbd.service';
import { ActionLabelsI18n } from '~/app/shared/constants/app.constants';
import { CdFormBuilder } from '~/app/shared/forms/cd-form-builder';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import { FinishedTask } from '~/app/shared/models/finished-task';
import { Permission } from '~/app/shared/models/permissions';
import { AuthStorageService } from '~/app/shared/services/auth-storage.service';
import { TaskWrapperService } from '~/app/shared/services/task-wrapper.service';

@Component({
  selector: 'cd-rbd-trash-purge-modal',
  templateUrl: './rbd-trash-purge-modal.component.html',
  styleUrls: ['./rbd-trash-purge-modal.component.scss']
})
export class RbdTrashPurgeModalComponent extends BaseModal implements OnInit {
  poolPermission: Permission;
  purgeForm: CdFormGroup;
  pools: any[];
  isZhHans: boolean;

  constructor(
    private authStorageService: AuthStorageService,
    private rbdService: RbdService,
    public actionLabels: ActionLabelsI18n,
    private fb: CdFormBuilder,
    private poolService: PoolService,
    private taskWrapper: TaskWrapperService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    super();
    this.poolPermission = this.authStorageService.getPermissions().pool;
    this.isZhHans = localeId.startsWith('zh');
  }

  get purgeDescription(): string {
    return this.isZhHans ? '要清理回收站，请选择全部或某个存储池，然后点击 Purge。' : 'To purge, select All or one pool and click Purge.';
  }

  get poolLabel(): string {
    return this.isZhHans ? '存储池' : 'Pool';
  }

  createForm() {
    this.purgeForm = this.fb.group({
      poolName: ''
    });
  }

  ngOnInit() {
    if (this.poolPermission.read) {
      this.poolService.list(['pool_name', 'application_metadata']).then((resp) => {
        this.pools = resp
          .filter((pool: Pool) => pool.application_metadata.includes('rbd'))
          .map((pool: Pool) => pool.pool_name);
      });
    }

    this.createForm();
  }

  purge() {
    const poolName = this.purgeForm.getValue('poolName') || '';
    this.taskWrapper
      .wrapTaskAroundCall({
        task: new FinishedTask('rbd/trash/purge', {
          pool_name: poolName
        }),
        call: this.rbdService.purgeTrash(poolName)
      })
      .subscribe({
        error: () => {
          this.purgeForm.setErrors({ cdSubmitButton: true });
        },
        complete: () => {
          this.closeModal();
        }
      });
  }
}
