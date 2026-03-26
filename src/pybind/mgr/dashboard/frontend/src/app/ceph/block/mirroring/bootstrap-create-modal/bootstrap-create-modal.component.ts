import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  LOCALE_ID,
  OnDestroy,
  OnInit,
  Optional
} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';

import { BaseModal } from 'carbon-components-angular';
import _ from 'lodash';
import { concat, forkJoin, Subscription } from 'rxjs';
import { last, tap } from 'rxjs/operators';

import { Pool } from '~/app/ceph/pool/pool';
import { RbdMirroringService } from '~/app/shared/api/rbd-mirroring.service';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import { FinishedTask } from '~/app/shared/models/finished-task';
import { TaskWrapperService } from '~/app/shared/services/task-wrapper.service';

@Component({
  selector: 'cd-bootstrap-create-modal',
  templateUrl: './bootstrap-create-modal.component.html',
  styleUrls: ['./bootstrap-create-modal.component.scss']
})
export class BootstrapCreateModalComponent
  extends BaseModal
  implements OnDestroy, OnInit, AfterViewInit {
  pools: any[] = [];
  token: string;

  subs: Subscription;

  createBootstrapForm: CdFormGroup;
  isZhHans = false;

  constructor(
    private rbdMirroringService: RbdMirroringService,
    private taskWrapper: TaskWrapperService,
    private changeDetectorRef: ChangeDetectorRef,

    @Inject('siteName') @Optional() public siteName?: string,
    @Inject(LOCALE_ID) private localeId?: string
  ) {
    super();
    this.isZhHans = this.localeId?.startsWith('zh') || false;
    this.createForm();
  }

  get modalTitle(): string {
    return this.isZhHans ? '创建 Bootstrap Token' : 'Create Bootstrap Token';
  }

  get siteNameLabel(): string {
    return this.isZhHans ? '站点名称' : 'Site Name';
  }

  get namePlaceholder(): string {
    return this.isZhHans ? '名称...' : 'Name...';
  }

  get tokenPlaceholder(): string {
    return this.isZhHans ? '生成的令牌...' : 'Generated token...';
  }

  get closeText(): string {
    return this.isZhHans ? '关闭' : 'Close';
  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  createForm() {
    this.createBootstrapForm = new CdFormGroup({
      siteName: new UntypedFormControl('', {
        validators: [Validators.required]
      }),
      pools: new UntypedFormGroup(
        {},
        {
          validators: [this.validatePools()]
        }
      ),
      token: new UntypedFormControl('', {})
    });
  }

  ngOnInit() {
    this.createBootstrapForm.get('siteName').setValue(this.siteName);
    this.rbdMirroringService.getSiteName().subscribe((response: any) => {
      this.createBootstrapForm.get('siteName').setValue(response.site_name);
    });

    this.subs = this.rbdMirroringService.subscribeSummary((data) => {
      const pools = data.content_data.pools;
      this.pools = pools.reduce((acc: any[], pool: Pool) => {
        acc.push({
          name: pool['name'],
          mirror_mode: pool['mirror_mode']
        });
        return acc;
      }, []);

      const poolsControl = this.createBootstrapForm.get('pools') as UntypedFormGroup;
      _.each(this.pools, (pool) => {
        const poolName = pool['name'];
        const mirroring_disabled = pool['mirror_mode'] === 'disabled';
        const control = poolsControl.controls[poolName];
        if (control) {
          if (mirroring_disabled && control.disabled) {
            control.enable();
          } else if (!mirroring_disabled && control.enabled) {
            control.disable();
            control.setValue(true);
          }
        } else {
          poolsControl.addControl(
            poolName,
            new UntypedFormControl({ value: !mirroring_disabled, disabled: !mirroring_disabled })
          );
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  validatePools(): ValidatorFn {
    return (poolsControl: UntypedFormGroup): { [key: string]: any } => {
      let checkedCount = 0;
      _.each(poolsControl.controls, (control) => {
        if (control.value === true) {
          ++checkedCount;
        }
      });

      if (checkedCount > 0) {
        return null;
      }

      return { requirePool: true };
    };
  }

  generate() {
    this.createBootstrapForm.get('token').setValue('');

    let bootstrapPoolName = '';
    const poolNames: string[] = [];
    const poolsControl = this.createBootstrapForm.get('pools') as UntypedFormGroup;
    _.each(poolsControl.controls, (control, poolName) => {
      if (control.value === true) {
        bootstrapPoolName = poolName;
        if (!control.disabled) {
          poolNames.push(poolName);
        }
      }
    });

    const poolModeRequest = {
      mirror_mode: 'image'
    };

    const apiActionsObs = concat(
      this.rbdMirroringService.setSiteName(this.createBootstrapForm.getValue('siteName')),
      forkJoin(
        poolNames.map((poolName) => this.rbdMirroringService.updatePool(poolName, poolModeRequest))
      ),
      this.rbdMirroringService
        .createBootstrapToken(bootstrapPoolName)
        .pipe(tap((data: any) => this.createBootstrapForm.get('token').setValue(data['token'])))
    ).pipe(last());

    const finishHandler = () => {
      this.rbdMirroringService.refresh();
      this.createBootstrapForm.setErrors({ cdSubmitButton: true });
    };

    const taskObs = this.taskWrapper.wrapTaskAroundCall({
      task: new FinishedTask('rbd/mirroring/bootstrap/create', {}),
      call: apiActionsObs
    });
    taskObs.subscribe({ error: finishHandler, complete: finishHandler });
  }
}
