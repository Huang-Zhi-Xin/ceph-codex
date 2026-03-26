import { Component, Inject, LOCALE_ID, OnInit, Optional } from '@angular/core';
import { AbstractControl, UntypedFormControl, Validators } from '@angular/forms';

import { RbdMirroringService } from '~/app/shared/api/rbd-mirroring.service';
import { ActionLabelsI18n } from '~/app/shared/constants/app.constants';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import { FinishedTask } from '~/app/shared/models/finished-task';
import { TaskWrapperService } from '~/app/shared/services/task-wrapper.service';
import { PoolEditPeerResponseModel } from './pool-edit-peer-response.model';
import { BaseModal } from 'carbon-components-angular';

@Component({
  selector: 'cd-pool-edit-peer-modal',
  templateUrl: './pool-edit-peer-modal.component.html',
  styleUrls: ['./pool-edit-peer-modal.component.scss']
})
export class PoolEditPeerModalComponent extends BaseModal implements OnInit {
  editPeerForm: CdFormGroup;
  bsConfig = {
    containerClass: 'theme-default'
  };
  pattern: string;
  isZhHans = false;

  response: PoolEditPeerResponseModel;

  constructor(
    public actionLabels: ActionLabelsI18n,
    private rbdMirroringService: RbdMirroringService,
    private taskWrapper: TaskWrapperService,

    @Inject('poolName') public poolName: string,
    @Optional() @Inject('peerUUID') public peerUUID = '',
    @Optional() @Inject('mode') public mode = '',
    @Inject(LOCALE_ID) private localeId: string
  ) {
    super();
    this.isZhHans = this.localeId.startsWith('zh');
    this.createForm();
  }

  get modalTitle(): string {
    return this.isZhHans
      ? this.mode === 'edit'
        ? '编辑池镜像对等端'
        : '添加池镜像对等端'
      : this.mode === 'edit'
        ? 'Edit pool mirror peer'
        : 'Add pool mirror peer';
  }

  get clusterNamePlaceholder(): string {
    return this.isZhHans ? '名称...' : 'Name...';
  }

  get clientIdPlaceholder(): string {
    return this.isZhHans ? 'CephX ID...' : 'CephX ID...';
  }

  get clusterNameLabel(): string {
    return this.isZhHans ? '集群名称' : 'Cluster Name';
  }

  get clientIdLabel(): string {
    return this.isZhHans ? 'CephX ID' : 'CephX ID';
  }

  get monitorAddressesPlaceholder(): string {
    return this.isZhHans ? '逗号分隔的地址...' : 'Comma-delimited addresses...';
  }

  get cephxKeyPlaceholder(): string {
    return this.isZhHans ? 'Base64 编码的 key...' : 'Base64-encoded key...';
  }

  get submitText(): string {
    return this.isZhHans ? '提交' : this.actionLabels.SUBMIT;
  }

  createForm() {
    this.editPeerForm = new CdFormGroup({
      clusterName: new UntypedFormControl('', {
        validators: [Validators.required, this.validateClusterName]
      }),
      clientID: new UntypedFormControl('', {
        validators: [Validators.required, this.validateClientID]
      }),
      monAddr: new UntypedFormControl('', {
        validators: [this.validateMonAddr]
      }),
      key: new UntypedFormControl('', {
        validators: [this.validateKey]
      })
    });
  }

  ngOnInit() {
    this.pattern = `${this.poolName}/${this.peerUUID}`;
    if (this.mode === 'edit') {
      this.rbdMirroringService
        .getPeer(this.poolName, this.peerUUID)
        .subscribe((resp: PoolEditPeerResponseModel) => {
          this.setResponse(resp);
        });
    }
  }

  validateClusterName(control: AbstractControl) {
    if (!control.value.match(/^[\w\-_]*$/)) {
      return { invalidClusterName: { value: control.value } };
    }

    return undefined;
  }

  validateClientID(control: AbstractControl) {
    if (!control.value.match(/^(?!client\.)[\w\-_.]*$/)) {
      return { invalidClientID: { value: control.value } };
    }

    return undefined;
  }

  validateMonAddr(control: AbstractControl) {
    if (!control.value.match(/^[,; ]*([\w.\-_\[\]]+(:[\d]+)?[,; ]*)*$/)) {
      return { invalidMonAddr: { value: control.value } };
    }

    return undefined;
  }

  validateKey(control: AbstractControl) {
    try {
      if (control.value === '' || !!atob(control.value)) {
        return null;
      }
    } catch (error) {}
    return { invalidKey: { value: control.value } };
  }

  setResponse(response: PoolEditPeerResponseModel) {
    this.response = response;
    this.editPeerForm.get('clusterName').setValue(response.cluster_name);
    this.editPeerForm.get('clientID').setValue(response.client_id);
    this.editPeerForm.get('monAddr').setValue(response.mon_host);
    this.editPeerForm.get('key').setValue(response.key);
  }

  update() {
    const request = new PoolEditPeerResponseModel();
    request.cluster_name = this.editPeerForm.getValue('clusterName');
    request.client_id = this.editPeerForm.getValue('clientID');
    request.mon_host = this.editPeerForm.getValue('monAddr');
    request.key = this.editPeerForm.getValue('key');

    let action;
    if (this.mode === 'edit') {
      action = this.taskWrapper.wrapTaskAroundCall({
        task: new FinishedTask('rbd/mirroring/peer/edit', {
          pool_name: this.poolName
        }),
        call: this.rbdMirroringService.updatePeer(this.poolName, this.peerUUID, request)
      });
    } else {
      action = this.taskWrapper.wrapTaskAroundCall({
        task: new FinishedTask('rbd/mirroring/peer/add', {
          pool_name: this.poolName
        }),
        call: this.rbdMirroringService.addPeer(this.poolName, request)
      });
    }

    action.subscribe({
      error: () => this.editPeerForm.setErrors({ cdSubmitButton: true }),
      complete: () => {
        this.rbdMirroringService.refresh();
        this.closeModal();
      }
    });
  }
}
