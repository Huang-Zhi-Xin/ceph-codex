import { Component, Inject, LOCALE_ID, OnInit, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CephfsSubvolumeService } from '~/app/shared/api/cephfs-subvolume.service';
import { ActionLabelsI18n, URLVerbs } from '~/app/shared/constants/app.constants';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import { FinishedTask } from '~/app/shared/models/finished-task';
import { TaskWrapperService } from '~/app/shared/services/task-wrapper.service';
import { Pool } from '../../pool/pool';
import { FormatterService } from '~/app/shared/services/formatter.service';
import { CdTableColumn } from '~/app/shared/models/cd-table-column';
import { CdValidators } from '~/app/shared/forms/cd-validators';
import { CephfsSubvolumeInfo } from '~/app/shared/models/cephfs-subvolume.model';
import { DimlessBinaryPipe } from '~/app/shared/pipes/dimless-binary.pipe';
import { OctalToHumanReadablePipe } from '~/app/shared/pipes/octal-to-human-readable.pipe';
import { CdForm } from '~/app/shared/forms/cd-form';
import { CephfsSubvolumeGroupService } from '~/app/shared/api/cephfs-subvolume-group.service';
import { CephfsSubvolumeGroup } from '~/app/shared/models/cephfs-subvolume-group.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'cd-cephfs-subvolume-form',
  templateUrl: './cephfs-subvolume-form.component.html',
  styleUrls: ['./cephfs-subvolume-form.component.scss']
})
export class CephfsSubvolumeFormComponent extends CdForm implements OnInit {
  subvolumeForm: CdFormGroup;

  action: string;
  resource: string;

  subVolumeGroups$: Observable<CephfsSubvolumeGroup[]>;
  subVolumeGroups: CephfsSubvolumeGroup[];
  dataPools: Pool[];

  columns: CdTableColumn[];
  scopePermissions: Array<any> = [];
  initialMode = {
    owner: ['read', 'write', 'execute'],
    group: ['read', 'execute'],
    others: ['read', 'execute']
  };
  scopes: string[] = ['owner', 'group', 'others'];
  isZhHans = false;

  constructor(
    private actionLabels: ActionLabelsI18n,
    private taskWrapper: TaskWrapperService,
    private cephFsSubvolumeService: CephfsSubvolumeService,
    private cephFsSubvolumeGroupService: CephfsSubvolumeGroupService,
    private formatter: FormatterService,
    private dimlessBinary: DimlessBinaryPipe,
    private octalToHumanReadable: OctalToHumanReadablePipe,
    @Inject(LOCALE_ID) private localeId: string,

    @Optional() @Inject('fsName') public fsName: string,
    @Optional() @Inject('subVolumeName') public subVolumeName: string,
    @Optional() @Inject('subVolumeGroupName') public subVolumeGroupName: string,
    @Optional() @Inject('pools') public pools: Pool[],
    @Optional() @Inject('isEdit') public isEdit = false
  ) {
    super();
    this.isZhHans = this.localeId.startsWith('zh');
    this.resource = $localize`Subvolume`;
  }

  get formTitle(): string {
    return `${this.isZhHans ? (this.isEdit ? '编辑' : '创建') : this.action} ${this.isZhHans ? '子卷' : 'Subvolume'}`;
  }

  get subvolumeNamePlaceholder(): string {
    return this.isZhHans ? '子卷名称...' : 'Subvolume name...';
  }

  get volumeNameLabel(): string {
    return this.isZhHans ? '卷名称' : 'Volume name';
  }

  get subvolumeGroupLabel(): string {
    return this.isZhHans ? '子卷组' : 'Subvolume group';
  }

  get sizePlaceholder(): string {
    return this.isZhHans ? '例如：10GiB' : 'e.g., 10GiB';
  }

  get cephfsPoolsLabel(): string {
    return this.isZhHans ? 'CephFS 存储池' : 'CephFS Pools';
  }

  get poolsHelperText(): string {
    return this.isZhHans
      ? '默认选择父目录的 data_pool_layout。'
      : 'By default, the data_pool_layout of the parent directory is selected.';
  }

  get uidPlaceholder(): string {
    return this.isZhHans ? '子卷 UID...' : 'Subvolume UID...';
  }

  get gidPlaceholder(): string {
    return this.isZhHans ? '子卷 GID...' : 'Subvolume GID...';
  }

  get modeHelpText(): string {
    return this.isZhHans
      ? '目录权限。默认模式为 755，对应 rwxr-xr-x。'
      : 'Permissions for the directory. Default mode is 755 which is rwxr-xr-x';
  }

  get isolatedNamespaceHelpText(): string {
    return this.isZhHans
      ? '为子卷创建独立的 RADOS 命名空间。'
      : 'To create subvolume in a separate RADOS namespace.';
  }

  get submitText(): string {
    return this.formTitle;
  }

  ngOnInit(): void {
    this.action = this.actionLabels.CREATE;
    this.columns = [
      {
        prop: 'scope',
        name: $localize`All`,
        flexGrow: 0.5
      },
      {
        prop: 'read',
        name: $localize`Read`,
        flexGrow: 0.5,
        cellClass: 'text-center'
      },
      {
        prop: 'write',
        name: $localize`Write`,
        flexGrow: 0.5,
        cellClass: 'text-center'
      },
      {
        prop: 'execute',
        name: $localize`Execute`,
        flexGrow: 0.5,
        cellClass: 'text-center'
      }
    ];

    this.subVolumeGroups$ = this.cephFsSubvolumeGroupService.get(this.fsName);
    this.dataPools = this.pools.filter((pool) => pool.type === 'data');
    this.createForm();

    this.isEdit ? this.populateForm() : this.loadingReady();
  }

  createForm() {
    this.subvolumeForm = new CdFormGroup({
      volumeName: new FormControl({ value: this.fsName, disabled: true }),
      subvolumeName: new FormControl('', {
        validators: [Validators.required, Validators.pattern(/^[.A-Za-z0-9_-]+$/)],
        asyncValidators: [
          CdValidators.unique(
            this.cephFsSubvolumeService.exists,
            this.cephFsSubvolumeService,
            null,
            null,
            this.fsName,
            this.subVolumeGroupName
          )
        ]
      }),
      subvolumeGroupName: new FormControl(this.subVolumeGroupName),
      pool: new FormControl(this.dataPools[0]?.pool, {
        validators: [Validators.required]
      }),
      size: new FormControl(null, {
        updateOn: 'blur'
      }),
      uid: new FormControl(null),
      gid: new FormControl(null),
      mode: new FormControl({}),
      isolatedNamespace: new FormControl(false)
    });
  }

  populateForm() {
    this.action = this.actionLabels.EDIT;
    this.cephFsSubvolumeService
      .info(this.fsName, this.subVolumeName, this.subVolumeGroupName)
      .subscribe((resp: CephfsSubvolumeInfo) => {
        // Disabled these fields since its not editable
        this.subvolumeForm.get('subvolumeName').disable();
        this.subvolumeForm.get('subvolumeGroupName').disable();
        this.subvolumeForm.get('pool').disable();
        this.subvolumeForm.get('uid').disable();
        this.subvolumeForm.get('gid').disable();

        this.subvolumeForm.get('isolatedNamespace').disable();
        this.subvolumeForm.get('subvolumeName').setValue(this.subVolumeName);
        this.subvolumeForm.get('subvolumeGroupName').setValue(this.subVolumeGroupName);
        if (resp.bytes_quota !== 'infinite') {
          this.subvolumeForm.get('size').setValue(this.dimlessBinary.transform(resp.bytes_quota));
        }
        this.subvolumeForm.get('uid').setValue(resp.uid);
        this.subvolumeForm.get('gid').setValue(resp.gid);
        this.subvolumeForm.get('isolatedNamespace').setValue(resp.pool_namespace);
        this.initialMode = this.octalToHumanReadable.transform(resp.mode, true);

        this.loadingReady();
      });
  }

  submit() {
    const subVolumeName = this.subvolumeForm.getValue('subvolumeName');
    const subVolumeGroupName = this.subvolumeForm.getValue('subvolumeGroupName');
    const pool = this.subvolumeForm.getValue('pool');
    const size = this.formatter.toBytes(this.subvolumeForm.getValue('size')) || 0;
    const uid = this.subvolumeForm.getValue('uid');
    const gid = this.subvolumeForm.getValue('gid');
    const mode = this.formatter.toOctalPermission(this.subvolumeForm.getValue('mode'));
    const isolatedNamespace = this.subvolumeForm.getValue('isolatedNamespace');

    if (this.isEdit) {
      const editSize = size === 0 ? 'infinite' : size;
      this.taskWrapper
        .wrapTaskAroundCall({
          task: new FinishedTask('cephfs/subvolume/' + URLVerbs.EDIT, {
            subVolumeName: subVolumeName
          }),
          call: this.cephFsSubvolumeService.update(
            this.fsName,
            subVolumeName,
            String(editSize),
            subVolumeGroupName
          )
        })
        .subscribe({
          error: () => {
            this.subvolumeForm.setErrors({ cdSubmitButton: true });
          },
          complete: () => {
            this.closeModal();
          }
        });
    } else {
      this.taskWrapper
        .wrapTaskAroundCall({
          task: new FinishedTask('cephfs/subvolume/' + URLVerbs.CREATE, {
            subVolumeName: subVolumeName
          }),
          call: this.cephFsSubvolumeService.create(
            this.fsName,
            subVolumeName,
            subVolumeGroupName,
            pool,
            String(size),
            uid,
            gid,
            mode,
            isolatedNamespace
          )
        })
        .subscribe({
          error: () => {
            this.subvolumeForm.setErrors({ cdSubmitButton: true });
          },
          complete: () => {
            this.closeModal();
          }
        });
    }
  }
}
