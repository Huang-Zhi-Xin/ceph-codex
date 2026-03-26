import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { UntypedFormControl, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import _ from 'lodash';
import { forkJoin, Observable, ReplaySubject } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { Pool } from '~/app/ceph/pool/pool';
import { PoolService } from '~/app/shared/api/pool.service';
import { RbdMirroringService } from '~/app/shared/api/rbd-mirroring.service';
import { RbdService } from '~/app/shared/api/rbd.service';
import { ActionLabelsI18n } from '~/app/shared/constants/app.constants';
import { Icons } from '~/app/shared/enum/icons.enum';
import { CdForm } from '~/app/shared/forms/cd-form';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import {
  RbdConfigurationEntry,
  RbdConfigurationSourceField
} from '~/app/shared/models/configuration';
import { FinishedTask } from '~/app/shared/models/finished-task';
import { ImageSpec } from '~/app/shared/models/image-spec';
import { Permission } from '~/app/shared/models/permissions';
import { DimlessBinaryPipe } from '~/app/shared/pipes/dimless-binary.pipe';
import { AuthStorageService } from '~/app/shared/services/auth-storage.service';
import { FormatterService } from '~/app/shared/services/formatter.service';
import { TaskWrapperService } from '~/app/shared/services/task-wrapper.service';
import { RBDImageFormat, RbdModel } from '../rbd-list/rbd-model';
import { RbdImageFeature } from './rbd-feature.interface';
import { RbdFormCloneRequestModel } from './rbd-form-clone-request.model';
import { RbdFormCopyRequestModel } from './rbd-form-copy-request.model';
import { RbdFormCreateRequestModel } from './rbd-form-create-request.model';
import { RbdFormEditRequestModel } from './rbd-form-edit-request.model';
import { RbdFormMode } from './rbd-form-mode.enum';
import { RbdFormResponseModel } from './rbd-form-response.model';
import { CdValidators } from '~/app/shared/forms/cd-validators';
import { RBDActionHelpers } from '../rbd-contants';

class ExternalData {
  rbd: RbdFormResponseModel;
  defaultFeatures: string[];
  pools: Pool[];
}

@Component({
  selector: 'cd-rbd-form',
  templateUrl: './rbd-form.component.html',
  styleUrls: ['./rbd-form.component.scss']
})
export class RbdFormComponent extends CdForm implements OnInit {
  poolPermission: Permission;
  rbdForm: CdFormGroup;
  getDirtyConfigurationValues: (
    includeLocalField?: boolean,
    localField?: RbdConfigurationSourceField
  ) => RbdConfigurationEntry[];

  namespaces: Array<string> = [];
  namespacesByPoolCache = {};
  pools: Array<Pool> = null;
  allPools: Array<Pool> = null;
  dataPools: Array<Pool> = null;
  allDataPools: Array<Pool> = [];
  features: { [key: string]: RbdImageFeature };
  featuresList: RbdImageFeature[] = [];
  initializeConfigData = new ReplaySubject<{
    initialData: RbdConfigurationEntry[];
    sourceType: RbdConfigurationSourceField;
  }>(1);

  pool: string;
  peerConfigured = false;
  advancedEnabled = false;
  public rbdFormMode = RbdFormMode;
  mode: RbdFormMode;
  response: RbdFormResponseModel;
  snapName: string;
  defaultObjectSize = '4 MiB';

  mirroringOptions = [
    {
      value: 'journal',
      text: RBDActionHelpers.journalTooltipText
    },
    {
      value: 'snapshot',
      text: RBDActionHelpers.snapshotTooltipText
    }
  ];
  poolMirrorMode: string;
  mirroring = false;
  currentPoolName = '';
  currentPoolMirrorMode = '';
  copyMessage: string = RBDActionHelpers.copy;
  objectSizes: Array<string> = [
    '4 KiB',
    '8 KiB',
    '16 KiB',
    '32 KiB',
    '64 KiB',
    '128 KiB',
    '256 KiB',
    '512 KiB',
    '1 MiB',
    '2 MiB',
    '4 MiB',
    '8 MiB',
    '16 MiB',
    '32 MiB'
  ];

  defaultStripingUnit = '4 MiB';

  defaultStripingCount = 1;

  action: string;
  resource: string;
  formActionLabel: string;
  setModeLabel: string;
  isZhHans: boolean;
  private rbdImage = new ReplaySubject(1);
  private routerUrl: string;

  icons = Icons;
  currentImageMirrorMode = '';
  showMirrorDisableMessage = false;

  constructor(
    private authStorageService: AuthStorageService,
    private route: ActivatedRoute,
    private poolService: PoolService,
    private rbdService: RbdService,
    private formatter: FormatterService,
    private taskWrapper: TaskWrapperService,
    private dimlessBinaryPipe: DimlessBinaryPipe,
    public actionLabels: ActionLabelsI18n,
    private router: Router,
    private rbdMirroringService: RbdMirroringService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    super();
    this.isZhHans = localeId.startsWith('zh');
    this.routerUrl = this.router.url;
    this.poolPermission = this.authStorageService.getPermissions().pool;
    this.resource = $localize`Image`;
    this.formActionLabel = '';
    this.setModeLabel = this.isZhHans ? '设置模式' : 'Set mode';
    this.features = {
      'deep-flatten': {
        desc: $localize`Deep flatten`,
        requires: null,
        allowEnable: false,
        allowDisable: true,
        helperHtml: $localize`Feature can be disabled but can't be re-enabled later`,
        helperText: $localize`Speeds up the process of deleting a clone by removing the dependency on the parent image.`
      },
      layering: {
        desc: $localize`Layering`,
        requires: null,
        allowEnable: false,
        allowDisable: false,
        helperHtml: $localize`Feature flag can't be manipulated after the image is created. Disabling this option will also disable the Protect and Clone actions on Snapshot`,
        helperText: $localize`Allows the creation of snapshots and clones of an image.`
      },
      'exclusive-lock': {
        desc: $localize`Exclusive lock`,
        requires: null,
        allowEnable: true,
        allowDisable: true,
        helperText: $localize`Ensures that only one client can write to the image at a time.`
      },
      'object-map': {
        desc: $localize`Object map (requires exclusive-lock)`,
        requires: 'exclusive-lock',
        allowEnable: true,
        allowDisable: true,
        initDisabled: true,
        helperText: $localize`Tracks which objects actually exist (have data stored on a device). Enabling object map support speeds up I/O operations for cloning, importing and exporting a sparsely populated image, and deleting.`
      },
      'fast-diff': {
        desc: $localize`Fast diff (interlocked with object-map)`,
        requires: 'object-map',
        allowEnable: true,
        allowDisable: true,
        interlockedWith: 'object-map',
        initDisabled: true,
        helperText: $localize`Speeds up the process of comparing two images.`
      }
    };
    this.featuresList = this.objToArray(this.features);
    this.createForm();
  }

  get formTitle(): string {
    const resourceLabel = this.isZhHans ? '映像' : this.resource;
    return `${this.formActionLabel || this.action || ''} ${resourceLabel}`.trim();
  }

  get snapshotMirroringInfoText(): string {
    return this.isZhHans
      ? '要启用快照镜像，需要将所选存储池中的模式设置为 Image。'
      : 'You need to set mode as Image in the selected pool to enable snapshot mirroring.';
  }

  get mirroringHelpText(): string {
    return this.isZhHans
      ? '允许在两个 Ceph 集群之间异步镜像数据。'
      : 'Allow data to be asynchronously mirrored between two Ceph clusters';
  }

  get disableMirroringInfoText(): string {
    return this.isZhHans
      ? '在存储池镜像模式下无法禁用镜像。若要启用此选项，请先修改镜像模式。'
      : 'Mirroring can not be disabled on Pool mirror mode. You need to change the mirror mode to enable this option.';
  }

  get enableMirroringInfoText(): string {
    return this.isZhHans
      ? '要启用镜像，必须在所选存储池中设置镜像模式。'
      : 'You need to set mirror mode in the selected pool to enable mirroring.';
  }

  get scheduleIntervalLabel(): string {
    return this.isZhHans ? '调度间隔' : 'Schedule Interval';
  }

  get scheduleHelperText(): string {
    return this.isZhHans
      ? '按周期自动创建镜像快照。可使用 d、h、m 后缀分别按天、小时或分钟指定间隔。要创建镜像快照，必须已导入或创建可用的镜像对等端。'
      : 'Create Mirror-Snapshots automatically on a periodic basis. The interval can be specified in days, hours, or minutes using d, h, m suffix respectively. To create mirror snapshots, you must import or create and have available peers to mirror';
  }

  get schedulePlaceholder(): string {
    return this.isZhHans ? '例如：12h、1d 或 10m' : 'e.g., 12h or 1d or 10m';
  }

  get dataPoolLabel(): string {
    return this.isZhHans ? '数据存储池' : 'Data pool';
  }

  get dataPoolHelperText(): string {
    return this.isZhHans
      ? '用于存储 RBD 对象数据的专用存储池。'
      : 'Dedicated pool that stores the object-data of the RBD';
  }

  get useDedicatedDataPoolLabel(): string {
    return this.isZhHans ? '使用专用数据池' : 'Use a dedicated data pool';
  }

  get useDedicatedDataPoolHelperText(): string {
    return this.isZhHans
      ? '使用专用存储池保存映像数据。若不选择，映像数据将与映像元数据保存在同一个存储池中。'
      : 'Use a dedicated pool to store the image data. If not selected, the image data will be stored in the same pool as the image metadata.';
  }

  get dedicatedDataPoolRequirementText(): string {
    return this.isZhHans
      ? '需要至少两个带有 rbd 应用标签的存储池，才能使用专用数据池。'
      : 'You need more than one pool with the rbd application label use to use a dedicated data pool.';
  }

  get namespaceLabel(): string {
    return this.isZhHans ? '命名空间' : 'Namespace';
  }

  get namespaceHelperText(): string {
    return this.isZhHans
      ? '命名空间可用于在 Ceph 集群中对 RBD 映像进行逻辑分组，便于更高效地定位和管理相关映像。'
      : 'Namespace allows you to logically group RBD images within your Ceph Cluster.Choosing a namespace makes it easier to locate and manage related RBD images efficiently';
  }

  get objectSizeLabel(): string {
    return this.isZhHans ? '对象大小' : 'Object size';
  }

  get objectSizeHelperText(): string {
    return this.isZhHans
      ? 'Ceph 存储集群中的对象具有可配置的最大大小（例如 2MB、4MB 等）。对象大小应足够大，以容纳多个条带单元，并且应为条带单元大小的整数倍。'
      : 'Objects in the Ceph Storage Cluster have a maximum configurable size (e.g., 2MB, 4MB, etc.). The object size should be large enough to accommodate many stripe units, and should be a multiple of the stripe unit.';
  }

  get stripeUnitLabel(): string {
    return this.isZhHans ? '条带单元' : 'Stripe unit';
  }

  get stripeUnitHelperText(): string {
    return this.isZhHans
      ? '条带具有可配置的单元大小（例如 64KB）。Ceph 客户端会将写入对象的数据拆分为大小相等的条带单元，最后一个条带单元除外。条带宽度应为对象大小的一部分，以便一个对象可包含多个条带单元。'
      : 'Stripes have a configurable unit size (e.g., 64kb). The Ceph Client divides the data it will write to objects into equally sized stripe units, except for the last stripe unit. A stripe width, should be a fraction of the Object Size so that an object may contain many stripe units';
  }

  get stripingUnitRequiredLabel(): string {
    return this.isZhHans ? '条带单元' : 'Striping Unit';
  }

  get selectStripeUnitText(): string {
    return this.isZhHans ? '-- 选择条带单元 --' : '-- Select stripe unit --';
  }

  get stripeCountLabel(): string {
    return this.isZhHans ? '条带数量' : 'Stripe count';
  }

  get stripeCountHelperText(): string {
    return this.isZhHans
      ? 'Ceph 客户端会按照条带数量，将一系列条带单元写入多个对象，这组对象称为对象集。写到对象集中的最后一个对象后，会重新从第一个对象开始写入。'
      : 'The Ceph Client writes a sequence of stripe units over a series of objects determined by the stripe count. The series of objects is called an object set. After the Ceph Client writes to the last object in the object set, it returns to the first object in the object set.';
  }

  get stripingCountRequiredLabel(): string {
    return this.isZhHans ? '条带数量' : 'Striping Count';
  }

  objToArray(obj: { [key: string]: any }) {
    return _.map(obj, (o, key) => Object.assign(o, { key: key }));
  }

  createForm() {
    this.rbdForm = new CdFormGroup(
      {
        parent: new UntypedFormControl(''),
        name: new UntypedFormControl('', {
          validators: [Validators.required, Validators.pattern(/^[^@/]+?$/)]
        }),
        pool: new UntypedFormControl(null, {
          validators: [Validators.required]
        }),
        namespace: new UntypedFormControl(null),
        useDataPool: new UntypedFormControl(false),
        dataPool: new UntypedFormControl(null),
        size: new UntypedFormControl(null, {
          updateOn: 'blur'
        }),
        obj_size: new UntypedFormControl(this.defaultObjectSize),
        features: new CdFormGroup(
          this.featuresList.reduce((acc: object, e) => {
            acc[e.key] = new UntypedFormControl({ value: false, disabled: !!e.initDisabled });
            return acc;
          }, {})
        ),
        mirroring: new UntypedFormControl(false),
        schedule: new UntypedFormControl('', {
          validators: [
            Validators.pattern(/^([0-9]+)d|([0-9]+)h|([0-9]+)m$/),
            CdValidators.requiredIf({
              mirroringMode: 'snapshot',
              mirroring: true
            })
          ] // check schedule interval to be in format - 1d or 1h or 1m
        }),
        mirroringMode: new UntypedFormControl(''),
        stripingUnit: new UntypedFormControl(this.defaultStripingUnit),
        stripingCount: new UntypedFormControl(this.defaultStripingCount, {
          updateOn: 'blur'
        })
      },
      this.validateRbdForm(this.formatter)
    );
  }

  disableForEdit() {
    this.rbdForm.get('parent').disable();
    this.rbdForm.get('pool').disable();
    this.rbdForm.get('namespace').disable();
    this.rbdForm.get('useDataPool').disable();
    this.rbdForm.get('dataPool').disable();
    this.rbdForm.get('obj_size').disable();
    this.rbdForm.get('stripingUnit').disable();
    this.rbdForm.get('stripingCount').disable();

    /* RBD Image Format v1 */
    this.rbdImage.subscribe((image: RbdModel) => {
      if (image.image_format === RBDImageFormat.V1) {
        this.rbdForm.get('deep-flatten').disable();
        this.rbdForm.get('layering').disable();
        this.rbdForm.get('exclusive-lock').disable();
      } else {
        if (!this.rbdForm.get('deep-flatten').value) {
          this.rbdForm.get('deep-flatten').disable();
        }
        this.rbdForm.get('layering').disable();
      }
    });
  }

  disableForClone() {
    this.rbdForm.get('parent').disable();
    this.rbdForm.get('size').disable();
  }

  disableForCopy() {
    this.rbdForm.get('parent').disable();
    this.rbdForm.get('size').disable();
  }

  ngOnInit() {
    this.prepareFormForAction();
    this.gatherNeededData().subscribe(this.handleExternalData.bind(this));
  }

  setExclusiveLock() {
    if (this.mirroring && this.rbdForm.get('mirroringMode').value === 'journal') {
      this.rbdForm.get('exclusive-lock').setValue(true);
      this.rbdForm.get('exclusive-lock').disable();
    } else {
      this.rbdForm.get('exclusive-lock').enable();
    }
  }

  setMirrorMode() {
    this.mirroring = !this.mirroring;
    if (this.mirroring) {
      this.rbdForm.get('mirroringMode').setValue(this.mirroringOptions[0].value);
    }
    this.setExclusiveLock();
    this.checkPeersConfigured();
  }

  checkPeersConfigured(poolname?: string) {
    var Poolname = poolname ? poolname : this.rbdForm.get('pool').value;
    this.rbdMirroringService.getPeerForPool(Poolname).subscribe((resp: any) => {
      if (resp.length > 0) {
        this.peerConfigured = true;
      }
    });
  }

  setPoolMirrorMode() {
    this.currentPoolName =
      this.mode === this.rbdFormMode.editing
        ? this.response?.pool_name
        : this.rbdForm.getValue('pool');
    if (this.currentPoolName) {
      this.rbdMirroringService.refresh();
      this.rbdMirroringService.subscribeSummary((data) => {
        const pool = data.content_data.pools.find((o: any) => o.name === this.currentPoolName);
        this.currentPoolMirrorMode = pool.mirror_mode;
        if (this.mode === this.rbdFormMode.editing) {
          if (this.currentPoolMirrorMode === 'pool') {
            this.showMirrorDisableMessage = true;
          } else {
            this.showMirrorDisableMessage = false;
          }
          if (this.currentPoolMirrorMode !== 'image') {
            this.rbdForm.get('mirroring').disable();
            this.rbdForm.get('mirroringMode').disable();
          }
        } else {
          if (pool.mirror_mode === 'disabled') {
            this.mirroring = false;
            this.rbdForm.get('mirroring').setValue(this.mirroring);
            this.rbdForm.get('mirroring').disable();
          } else {
            this.mirroring = true;
            this.rbdForm.get('mirroring').enable();
            this.rbdForm.get('mirroring').setValue(this.mirroring);
            this.rbdForm.get('mirroringMode').setValue(this.mirroringOptions[0].value);
          }
        }
      });
    } else {
      if (this.mode !== this.rbdFormMode.editing) {
        this.rbdForm.get('mirroring').disable();
      }
    }
    this.setExclusiveLock();
  }

  private prepareFormForAction() {
    const url = this.routerUrl;
    if (url.startsWith('/block/rbd/edit')) {
      this.mode = this.rbdFormMode.editing;
      this.action = this.actionLabels.EDIT;
      this.formActionLabel = this.isZhHans ? '编辑' : this.action;
      this.disableForEdit();
    } else if (url.startsWith('/block/rbd/clone')) {
      this.mode = this.rbdFormMode.cloning;
      this.disableForClone();
      this.action = this.actionLabels.CLONE;
      this.formActionLabel = this.isZhHans ? '克隆' : this.action;
    } else if (url.startsWith('/block/rbd/copy')) {
      this.mode = this.rbdFormMode.copying;
      this.action = this.actionLabels.COPY;
      this.formActionLabel = this.isZhHans ? '复制' : this.action;
      this.disableForCopy();
    } else {
      this.action = this.actionLabels.CREATE;
      this.formActionLabel = this.isZhHans ? '创建' : this.action;
    }
    _.each(this.features, (feature) => {
      this.rbdForm
        .get('features')
        .get(feature.key)
        .valueChanges.subscribe((value) => this.featureFormUpdate(feature.key, value));
    });
  }

  private gatherNeededData(): Observable<object> {
    const promises = {};
    if (this.mode) {
      // Mode is not set for creation
      this.route.params.subscribe((params: { image_spec: string; snap: string }) => {
        const imageSpec = ImageSpec.fromString(decodeURIComponent(params.image_spec));
        if (params.snap) {
          this.snapName = decodeURIComponent(params.snap);
        }
        promises['rbd'] = this.rbdService.get(imageSpec);
        this.checkPeersConfigured(imageSpec.poolName);
      });
    } else {
      // New image
      promises['defaultFeatures'] = this.rbdService.defaultFeatures();
    }
    if (this.mode !== this.rbdFormMode.editing && this.poolPermission.read) {
      promises['pools'] = this.poolService.list([
        'pool_name',
        'type',
        'flags_names',
        'application_metadata'
      ]);
    }
    return forkJoin(promises);
  }

  private handleExternalData(data: ExternalData) {
    this.handlePoolData(data.pools);
    this.setPoolMirrorMode();

    if (data.defaultFeatures) {
      // Fetched only during creation
      this.setFeatures(data.defaultFeatures);
    }

    if (data.rbd) {
      // Not fetched for creation
      const resp = data.rbd;
      this.setResponse(resp, this.snapName);
      this.rbdImage.next(resp);
    }

    this.loadingReady();
  }

  private handlePoolData(data: Pool[]) {
    if (!data) {
      // Not fetched while editing
      return;
    }
    const pools: Pool[] = [];
    const dataPools = [];
    for (const pool of data) {
      if (this.rbdService.isRBDPool(pool)) {
        if (pool.type === 'replicated') {
          pools.push(pool);
          dataPools.push(pool);
        } else if (pool.type === 'erasure' && pool.flags_names.indexOf('ec_overwrites') !== -1) {
          dataPools.push(pool);
        }
      }
    }
    this.pools = pools;
    this.allPools = pools;
    this.dataPools = dataPools;
    this.allDataPools = dataPools;
    if (this.pools.length >= 1) {
      const allPoolNames = this.pools.map((pool) => pool.pool_name);
      const poolName = allPoolNames.includes('rbd') ? 'rbd' : this.pools[0].pool_name;
      this.rbdForm.get('pool').setValue(poolName);
      this.onPoolChange(poolName);
    }
    if (this.allDataPools.length <= 1) {
      this.rbdForm.get('useDataPool').disable();
    }
  }

  onPoolChange(selectedPoolName: string) {
    const dataPoolControl = this.rbdForm.get('dataPool');
    if (dataPoolControl.value === selectedPoolName) {
      dataPoolControl.setValue(null);
    }
    this.dataPools = this.allDataPools
      ? this.allDataPools.filter((dataPool: any) => {
          return dataPool.pool_name !== selectedPoolName;
        })
      : [];
    this.namespaces = null;
    if (selectedPoolName in this.namespacesByPoolCache) {
      this.namespaces = this.namespacesByPoolCache[selectedPoolName];
    } else {
      this.rbdService.listNamespaces(selectedPoolName).subscribe((namespaces: any[]) => {
        namespaces = namespaces.map((namespace) => namespace.namespace);
        this.namespacesByPoolCache[selectedPoolName] = namespaces;
        this.namespaces = namespaces;
      });
    }
    this.rbdForm.get('namespace').setValue(null);
  }

  onUseDataPoolChange() {
    if (!this.rbdForm.getValue('useDataPool')) {
      this.rbdForm.get('dataPool').setValue(null);
      this.onDataPoolChange(null);
    }
  }

  onDataPoolChange(selectedDataPoolName: string) {
    const newPools = this.allPools.filter((pool: Pool) => {
      return pool.pool_name !== selectedDataPoolName;
    });
    if (this.rbdForm.getValue('pool') === selectedDataPoolName) {
      this.rbdForm.get('pool').setValue(null);
    }
    this.pools = newPools;
  }

  validateRbdForm(formatter: FormatterService): ValidatorFn {
    return (formGroup: CdFormGroup) => {
      // Data Pool
      const useDataPoolControl = formGroup.get('useDataPool');
      const dataPoolControl = formGroup.get('dataPool');
      let dataPoolControlErrors = null;
      if (useDataPoolControl.value && dataPoolControl.value == null) {
        dataPoolControlErrors = { required: true };
      }
      dataPoolControl.setErrors(dataPoolControlErrors);
      // Size
      const sizeControl = formGroup.get('size');
      const objectSizeControl = formGroup.get('obj_size');
      const objectSizeInBytes = formatter.toBytes(
        objectSizeControl.value != null ? objectSizeControl.value : this.defaultObjectSize
      );
      const stripingCountControl = formGroup.get('stripingCount');
      const stripingCount =
        stripingCountControl.value != null ? stripingCountControl.value : this.defaultStripingCount;
      let sizeControlErrors = null;
      if (sizeControl.value === null) {
        sizeControlErrors = { required: true };
      } else {
        const sizeInBytes = formatter.toBytes(sizeControl.value);
        if (stripingCount * objectSizeInBytes >= sizeInBytes) {
          sizeControlErrors = { invalidSizeObject: true };
        }
      }
      sizeControl.setErrors(sizeControlErrors);
      // Striping Unit
      const stripingUnitControl = formGroup.get('stripingUnit');
      let stripingUnitControlErrors = null;
      if (stripingUnitControl.value === null && stripingCountControl.value !== null) {
        stripingUnitControlErrors = { required: true };
      } else if (stripingUnitControl.value !== null) {
        const stripingUnitInBytes = formatter.toBytes(stripingUnitControl.value);
        if (stripingUnitInBytes > objectSizeInBytes) {
          stripingUnitControlErrors = { invalidStripingUnit: true };
        }
      }
      stripingUnitControl.setErrors(stripingUnitControlErrors);
      // Striping Count
      let stripingCountControlErrors = null;
      if (stripingCountControl.value === null && stripingUnitControl.value !== null) {
        stripingCountControlErrors = { required: true };
      } else if (stripingCount < 1) {
        stripingCountControlErrors = { min: true };
      }
      stripingCountControl.setErrors(stripingCountControlErrors);
      return null;
    };
  }

  deepBoxCheck(key: string, checked: boolean) {
    const childFeatures = this.getDependentChildFeatures(key);
    childFeatures.forEach((feature) => {
      const featureControl = this.rbdForm.get(feature.key);
      if (checked) {
        featureControl.enable({ emitEvent: false });
      } else {
        featureControl.disable({ emitEvent: false });
        featureControl.setValue(false, { emitEvent: false });
        this.deepBoxCheck(feature.key, checked);
      }

      const featureFormGroup = this.rbdForm.get('features');
      if (this.mode === this.rbdFormMode.editing && featureFormGroup.get(feature.key).enabled) {
        if (this.response.features_name.indexOf(feature.key) !== -1 && !feature.allowDisable) {
          featureFormGroup.get(feature.key).disable();
        } else if (
          this.response.features_name.indexOf(feature.key) === -1 &&
          !feature.allowEnable
        ) {
          featureFormGroup.get(feature.key).disable();
        }
      }
    });
  }

  protected getDependentChildFeatures(featureKey: string) {
    return _.filter(this.features, (f) => f.requires === featureKey) || [];
  }

  interlockCheck(key: string, checked: boolean) {
    // Adds a compatibility layer for Ceph cluster where the feature interlock of features hasn't
    // been implemented yet. It disables the feature interlock for images which only have one of
    // both interlocked features (at the time of this writing: object-map and fast-diff) enabled.
    const feature = this.featuresList.find((f) => f.key === key);
    if (this.response) {
      // Ignore `create` page
      const hasInterlockedFeature = feature.interlockedWith != null;
      const dependentInterlockedFeature = this.featuresList.find(
        (f) => f.interlockedWith === feature.key
      );
      const isOriginFeatureEnabled = !!this.response.features_name.find((e) => e === feature.key); // in this case: fast-diff
      if (hasInterlockedFeature) {
        const isLinkedEnabled = !!this.response.features_name.find(
          (e) => e === feature.interlockedWith
        ); // depends: object-map
        if (isOriginFeatureEnabled !== isLinkedEnabled) {
          return; // Ignore incompatible setting because it's from a previous cluster version
        }
      } else if (dependentInterlockedFeature) {
        const isOtherInterlockedFeatureEnabled = !!this.response.features_name.find(
          (e) => e === dependentInterlockedFeature.key
        );
        if (isOtherInterlockedFeatureEnabled !== isOriginFeatureEnabled) {
          return; // Ignore incompatible setting because it's from a previous cluster version
        }
      }
    }

    if (checked) {
      _.filter(this.features, (f) => f.interlockedWith === key).forEach((f) =>
        this.rbdForm.get(f.key).setValue(true, { emitEvent: false })
      );
    } else {
      if (feature.interlockedWith) {
        // Don't skip emitting the event here, as it prevents `fast-diff` from
        // becoming disabled when manually unchecked.  This is because it
        // triggers an update on `object-map` and if `object-map` doesn't emit,
        // `fast-diff` will not be automatically disabled.
        this.rbdForm.get('features').get(feature.interlockedWith).setValue(false);
      }
    }
  }

  featureFormUpdate(key: string, checked: boolean) {
    if (checked) {
      const required = this.features[key].requires;
      if (required && !this.rbdForm.getValue(required)) {
        this.rbdForm.get(`features.${key}`).setValue(false);
        return;
      }
    }
    this.deepBoxCheck(key, checked);
    this.interlockCheck(key, checked);
  }

  setFeatures(features: Array<string>) {
    const featuresControl = this.rbdForm.get('features');
    _.forIn(this.features, (feature) => {
      if (features.indexOf(feature.key) !== -1) {
        featuresControl.get(feature.key).setValue(true);
      }
      this.featureFormUpdate(feature.key, featuresControl.get(feature.key).value);
    });
  }

  setResponse(response: RbdFormResponseModel, snapName: string) {
    this.response = response;
    const imageSpec = new ImageSpec(
      response.pool_name,
      response.namespace,
      response.name
    ).toString();
    if (this.mode === this.rbdFormMode.cloning) {
      this.rbdForm.get('parent').setValue(`${imageSpec}@${snapName}`);
    } else if (this.mode === this.rbdFormMode.copying) {
      if (snapName) {
        this.rbdForm.get('parent').setValue(`${imageSpec}@${snapName}`);
      } else {
        this.rbdForm.get('parent').setValue(`${imageSpec}`);
      }
    } else if (response.parent) {
      const parent = response.parent;
      this.rbdForm
        .get('parent')
        .setValue(`${parent.pool_name}/${parent.image_name}@${parent.snap_name}`);
    }
    if (this.mode === this.rbdFormMode.editing) {
      this.rbdForm.get('name').setValue(response.name);
      if (response?.mirror_mode === 'snapshot' || response.features_name.includes('journaling')) {
        this.mirroring = true;
        this.rbdForm.get('mirroring').setValue(this.mirroring);
        this.rbdForm.get('mirroringMode').setValue(response?.mirror_mode);
        this.currentImageMirrorMode = response?.mirror_mode;
        this.rbdForm.get('schedule').setValue(response?.schedule_interval);
      } else {
        this.mirroring = false;
        this.rbdForm.get('mirroring').setValue(this.mirroring);
      }
      this.setPoolMirrorMode();
    }
    this.rbdForm.get('pool').setValue(response.pool_name);
    this.onPoolChange(response.pool_name);
    this.rbdForm.get('namespace').setValue(response.namespace);
    if (response.data_pool) {
      this.rbdForm.get('useDataPool').setValue(true);
      this.rbdForm.get('dataPool').setValue(response.data_pool);
    }
    this.rbdForm.get('size').setValue(this.dimlessBinaryPipe.transform(response.size));
    this.rbdForm.get('obj_size').setValue(this.dimlessBinaryPipe.transform(response.obj_size));
    this.setFeatures(response.features_name);
    this.rbdForm
      .get('stripingUnit')
      .setValue(this.dimlessBinaryPipe.transform(response.stripe_unit));
    this.rbdForm.get('stripingCount').setValue(response.stripe_count);
    /* Configuration */
    this.initializeConfigData.next({
      initialData: this.response.configuration,
      sourceType: RbdConfigurationSourceField.image
    });
  }

  createRequest() {
    const request = new RbdFormCreateRequestModel();
    request.pool_name = this.rbdForm.getValue('pool');
    request.namespace = this.rbdForm.getValue('namespace');
    request.name = this.rbdForm.getValue('name');
    request.schedule_interval = this.rbdForm.getValue('schedule');
    request.size = this.formatter.toBytes(this.rbdForm.getValue('size'));
    this.addObjectSizeAndStripingToRequest(request);
    request.configuration = this.getDirtyConfigurationValues();
    if (this.mirroring && this.currentPoolMirrorMode === 'image') {
      request.mirror_mode = this.rbdForm.getValue('mirroringMode');
    }
    return request;
  }

  private addObjectSizeAndStripingToRequest(
    request: RbdFormCreateRequestModel | RbdFormCloneRequestModel | RbdFormCopyRequestModel
  ) {
    request.obj_size = this.formatter.toBytes(this.rbdForm.getValue('obj_size'));
    _.forIn(this.features, (feature) => {
      if (this.rbdForm.getValue(feature.key)) {
        request.features.push(feature.key);
      }
    });

    if (this.mirroring && this.rbdForm.getValue('mirroringMode') === 'journal') {
      request.features.push('journaling');
    }

    /* Striping */
    request.stripe_unit = this.formatter.toBytes(this.rbdForm.getValue('stripingUnit'));
    request.stripe_count = this.rbdForm.getValue('stripingCount');
    request.data_pool = this.rbdForm.getValue('dataPool');
  }

  createAction(): Observable<any> {
    const request = this.createRequest();
    return this.taskWrapper.wrapTaskAroundCall({
      task: new FinishedTask('rbd/create', {
        pool_name: request.pool_name,
        namespace: request.namespace,
        image_name: request.name,
        schedule_interval: request.schedule_interval,
        start_time: request.start_time,
        mirror_mode: request.mirror_mode
      }),
      call: this.rbdService.create(request)
    });
  }

  editRequest() {
    const request = new RbdFormEditRequestModel();
    request.name = this.rbdForm.getValue('name');
    request.schedule_interval = this.rbdForm.getValue('schedule');
    request.enable_mirror = this.mirroring;
    request.size = this.formatter.toBytes(this.rbdForm.getValue('size'));
    _.forIn(this.features, (feature) => {
      if (this.rbdForm.getValue(feature.key)) {
        request.features.push(feature.key);
      }
    });
    if (request.enable_mirror) {
      request.image_mirror_mode = this.currentImageMirrorMode;
      if (this.rbdForm.getValue('mirroringMode') === 'journal') {
        request.mirror_mode = 'journal';
        request.features.push('journaling');
      }
      if (this.currentPoolMirrorMode === 'image') {
        request.mirror_mode = this.rbdForm.getValue('mirroringMode');
      }
    } else {
      const index = request.features.indexOf('journaling', 0);
      if (index > -1) {
        request.features.splice(index, 1);
      }
    }
    request.configuration = this.getDirtyConfigurationValues();
    return request;
  }

  cloneRequest(): RbdFormCloneRequestModel {
    const request = new RbdFormCloneRequestModel();
    request.child_pool_name = this.rbdForm.getValue('pool');
    request.child_namespace = this.rbdForm.getValue('namespace');
    request.child_image_name = this.rbdForm.getValue('name');
    this.addObjectSizeAndStripingToRequest(request);
    request.configuration = this.getDirtyConfigurationValues(
      true,
      RbdConfigurationSourceField.image
    );
    return request;
  }

  editAction(): Observable<any> {
    const imageSpec = new ImageSpec(
      this.response.pool_name,
      this.response.namespace,
      this.response.name
    );
    return this.taskWrapper.wrapTaskAroundCall({
      task: new FinishedTask('rbd/edit', {
        image_spec: imageSpec.toString()
      }),
      call: this.rbdService.update(imageSpec, this.editRequest())
    });
  }

  cloneAction(): Observable<any> {
    const request = this.cloneRequest();
    const imageSpec = new ImageSpec(
      this.response.pool_name,
      this.response.namespace,
      this.response.name
    );
    return this.taskWrapper.wrapTaskAroundCall({
      task: new FinishedTask('rbd/clone', {
        parent_image_spec: imageSpec.toString(),
        parent_snap_name: this.snapName,
        child_pool_name: request.child_pool_name,
        child_namespace: request.child_namespace,
        child_image_name: request.child_image_name
      }),
      call: this.rbdService.cloneSnapshot(imageSpec, this.snapName, request)
    });
  }

  copyRequest(): RbdFormCopyRequestModel {
    const request = new RbdFormCopyRequestModel();
    if (this.snapName) {
      request.snapshot_name = this.snapName;
    }
    request.dest_pool_name = this.rbdForm.getValue('pool');
    request.dest_namespace = this.rbdForm.getValue('namespace');
    request.dest_image_name = this.rbdForm.getValue('name');
    this.addObjectSizeAndStripingToRequest(request);
    request.configuration = this.getDirtyConfigurationValues(
      true,
      RbdConfigurationSourceField.image
    );
    return request;
  }

  copyAction(): Observable<any> {
    const request = this.copyRequest();
    const imageSpec = new ImageSpec(
      this.response.pool_name,
      this.response.namespace,
      this.response.name
    );
    return this.taskWrapper.wrapTaskAroundCall({
      task: new FinishedTask('rbd/copy', {
        src_image_spec: imageSpec.toString(),
        dest_pool_name: request.dest_pool_name,
        dest_namespace: request.dest_namespace,
        dest_image_name: request.dest_image_name
      }),
      call: this.rbdService.copy(imageSpec, request)
    });
  }

  shouldDisable(option: string): boolean {
    return this.currentPoolMirrorMode === 'pool' && option === 'snapshot' ? true : null;
  }

  submit() {
    if (!this.mode) {
      this.rbdImage.next('create');
    }
    this.rbdImage
      .pipe(
        first(),
        switchMap(() => {
          if (this.mode === this.rbdFormMode.editing) {
            return this.editAction();
          } else if (this.mode === this.rbdFormMode.cloning) {
            return this.cloneAction();
          } else if (this.mode === this.rbdFormMode.copying) {
            return this.copyAction();
          } else {
            return this.createAction();
          }
        })
      )
      .subscribe(
        () => undefined,
        () => this.rbdForm.setErrors({ cdSubmitButton: true }),
        () => this.router.navigate(['/block/rbd'])
      );
  }

  onAlertAction() {
    this.router.navigate([
      '/block/mirroring',
      { outlets: { modal: ['edit', this.rbdForm.getValue('pool')] } }
    ]);
  }
}
