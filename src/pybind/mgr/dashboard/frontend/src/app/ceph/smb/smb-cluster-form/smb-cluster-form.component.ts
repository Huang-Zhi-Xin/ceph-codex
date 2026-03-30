import { ChangeDetectorRef, Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import _ from 'lodash';
import {
  AUTHMODE,
  CLUSTERING,
  PLACEMENT,
  RESOURCE,
  DomainSettings,
  JoinSource,
  CLUSTER_RESOURCE,
  ClusterRequestModel,
  SMBUsersGroups,
  PublicAddress,
  SMBCluster
} from '../smb.model';
import { ActionLabelsI18n, URLVerbs } from '~/app/shared/constants/app.constants';
import { Icons } from '~/app/shared/enum/icons.enum';

import { FormArray, FormControl, UntypedFormControl, Validators } from '@angular/forms';
import { CdForm } from '~/app/shared/forms/cd-form';
import { CdFormBuilder } from '~/app/shared/forms/cd-form-builder';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import { CdValidators } from '~/app/shared/forms/cd-validators';
import { FinishedTask } from '~/app/shared/models/finished-task';

import { OrchestratorService } from '~/app/shared/api/orchestrator.service';
import { ModalCdsService } from '~/app/shared/services/modal-cds.service';
import { HostService } from '~/app/shared/api/host.service';
import { SmbService } from '~/app/shared/api/smb.service';
import { TaskWrapperService } from '~/app/shared/services/task-wrapper.service';
import { SmbDomainSettingModalComponent } from '../smb-domain-setting-modal/smb-domain-setting-modal.component';
import { CephServicePlacement } from '~/app/shared/models/service.interface';
import { UpperFirstPipe } from '~/app/shared/pipes/upper-first.pipe';
import { CLUSTER_PATH } from '../smb-cluster-list/smb-cluster-list.component';
import { USERSGROUPS_PATH } from '../smb-usersgroups-list/smb-usersgroups-list.component';
import { Host } from '~/app/shared/models/host.interface';

@Component({
  selector: 'cd-smb-cluster-form',
  templateUrl: './smb-cluster-form.component.html',
  styleUrls: ['./smb-cluster-form.component.scss']
})
export class SmbClusterFormComponent extends CdForm implements OnInit {
  smbForm: CdFormGroup;
  hostsAndLabels$: Observable<{ hosts: any[]; labels: any[] }>;
  hasOrchestrator: boolean;
  orchStatus$: Observable<any>;
  allClustering: string[] = [];
  CLUSTERING = CLUSTERING;
  selectedLabels: string[] = [];
  selectedHosts: string[] = [];
  action: string;
  resource: string;
  icons = Icons;
  domainSettingsObject: DomainSettings;
  isEdit = false;
  cluster_id: string;
  clusterResponse: SMBCluster;
  modalData$!: Observable<DomainSettings>;
  usersGroups$: Observable<SMBUsersGroups[]>;
  isZhHans: boolean;

  constructor(
    private hostService: HostService,
    private formBuilder: CdFormBuilder,
    public smbService: SmbService,
    public actionLabels: ActionLabelsI18n,
    private orchService: OrchestratorService,
    private modalService: ModalCdsService,
    private taskWrapperService: TaskWrapperService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    @Inject(LOCALE_ID) localeId: string
  ) {
    super();

    this.isZhHans = localeId.startsWith('zh');
    this.resource = $localize`Cluster`;
    this.modalData$ = this.smbService.modalData$;
  }

  get formTitle(): string {
    if (!this.isZhHans) {
      return `${this.action || ''} ${this.resource}`.trim();
    }
    return this.isEdit ? '编辑集群' : '创建集群';
  }

  get clusterNameLabel(): string {
    return this.isZhHans ? '集群名称' : 'Cluster Name';
  }

  get authModeLabel(): string {
    return this.isZhHans ? '认证模式' : 'Authentication Mode';
  }

  get clusterIdHelperText(): string {
    return this.isZhHans ? '唯一标识符' : 'Unique identifier';
  }

  get authModeHelperText(): string {
    return this.isZhHans
      ? 'Active Directory 认证用于域成员服务器，用户认证用于独立服务器配置。'
      : 'Active-directory authentication for domain member servers and User authentication for Stand-alone servers configuration.';
  }

  get domainSettingsLabel(): string {
    return this.isZhHans ? '域设置' : 'Domain Settings';
  }

  get domainSettingsFieldLabel(): string {
    return this.isZhHans ? '域设置' : 'Active Directory (AD) Settings';
  }

  get domainSettingsRequiredHelpText(): string {
    return this.isZhHans
      ? '请在“域设置”中指定 Realm 和 AD 访问资源。'
      : 'Specify the Realm and AD access resources in the Domain Settings field.';
  }

  get standaloneUserResourcesLabel(): string {
    return this.isZhHans ? '独立用户访问资源' : 'Standalone user access resources';
  }

  get userGroupPlaceholder(): string {
    return this.isZhHans
      ? '-- 用户和用户组访问资源列表 --'
      : '-- List of users and groups access resources --';
  }

  get addUserGroupText(): string {
    return this.isZhHans ? '添加用户组' : 'Add user group';
  }

  get createUserGroupText(): string {
    return this.isZhHans ? '创建用户组' : 'Create user group';
  }

  get serviceSpecificationsTitle(): string {
    return this.isZhHans ? '服务规格' : 'Service specifications';
  }

  get placementLabel(): string {
    return this.isZhHans ? '放置方式' : 'Placement';
  }

  get hostsOptionLabel(): string {
    return this.isZhHans ? '主机' : 'Hosts';
  }

  get labelsOptionLabel(): string {
    return this.isZhHans ? '标签' : 'Labels';
  }

  get labelFieldLabel(): string {
    return this.isZhHans ? '标签' : 'Label';
  }

  get hostsFieldLabel(): string {
    return this.isZhHans ? '主机' : 'Hosts';
  }

  get countLabel(): string {
    return this.isZhHans ? '数量' : 'Count';
  }

  get dnsLabel(): string {
    return this.isZhHans ? 'DNS' : 'DNS';
  }

  get addCustomDnsText(): string {
    return this.isZhHans ? '添加自定义 DNS' : 'Add custom DNS';
  }

  get customDnsHelpText(): string {
    return this.isZhHans
      ? '一个或多个 IP 地址将应用到 Samba 容器中，用于覆盖默认 DNS 解析器。当宿主 Ceph 节点未配置为解析 AD 域中的 DNS 记录时，可使用该选项。'
      : 'One or more IP Addresses that will be applied to the Samba containers to override the default DNS resolver(s). This option is intended to be used when the host Ceph node is not configured to resolve DNS entries within AD domain(s).';
  }

  get clusteringLabel(): string {
    return this.isZhHans ? '集群模式' : 'Clustering';
  }

  get clusteringOptions(): { value: string; label: string }[] {
    return this.allClustering.map((value) => ({
      value,
      label: this.getClusteringOptionLabel(value)
    }));
  }

  get addressLabel(): string {
    return this.isZhHans ? '地址' : 'Address';
  }

  get destinationLabel(): string {
    return this.isZhHans ? '目标地址' : 'Destination';
  }

  get addPublicAddressText(): string {
    return this.isZhHans ? '添加公网地址' : 'Add public address';
  }

  get publicAddressHelpText(): string {
    return this.isZhHans
      ? '分配由集群子系统管理的虚拟 IP 地址，这些地址可能会在运行 Samba 容器的节点之间自动迁移。'
      : 'Assign virtual IP addresses that will be managed by the clustering subsystem and may automatically move between nodes running Samba containers.';
  }

  get selectLabelsPlaceholder(): string {
    return this.isZhHans ? '选择标签...' : 'Select labels...';
  }

  get selectHostsPlaceholder(): string {
    return this.isZhHans ? '选择主机...' : 'Select hosts...';
  }

  get clusteringHelperText(): string {
    return this.isZhHans
      ? '默认值表示当放置数量不为 1 时启用集群模式。Always 表示无论放置数量如何都启用集群模式，Never 表示无论放置数量如何都禁用集群模式。'
      : 'Default value indicates that clustering should be enabled if the placement count value is any value other than 1. Always value enables clustering regardless of the placement count. Never value disables clustering regardless of the placement count.';
  }

  get managedAddressHelperText(): string {
    return this.isZhHans
      ? '该地址将分配给主机上的某个网络设备，并由系统自动管理。'
      : "This address will be assigned to one of the host's network devices and managed automatically.";
  }

  get managedDestinationHelperText(): string {
    return this.isZhHans
      ? '定义系统分配托管 IP 的位置。每个字符串值都必须是网络地址。'
      : 'Defines where the system will assign the managed IPs. Each string value must be a network address.';
  }

  private getClusteringOptionLabel(value: string): string {
    if (!this.isZhHans) {
      return value;
    }
    switch (value) {
      case CLUSTERING.Default:
        return '默认';
      case CLUSTERING.Always:
        return '始终';
      case CLUSTERING.Never:
        return '从不';
      default:
        return value;
    }
  }

  ngOnInit() {
    this.action = this.actionLabels.CREATE;
    this.usersGroups$ = this.smbService.listUsersGroups();
    if (this.router.url.startsWith(`/${CLUSTER_PATH}/${URLVerbs.EDIT}`)) {
      this.isEdit = true;
    }
    this.smbService.modalData$.subscribe((data: DomainSettings) => {
      this.domainSettingsObject = data;
      this.smbForm.get('domain_settings').setValue(data?.realm);
    });
    this.hostsAndLabels$ = forkJoin({
      hosts: this.hostService.getAllHosts(),
      labels: this.hostService.getLabels()
    }).pipe(
      map(({ hosts, labels }) => ({
        hosts: hosts.map((host: Host) => ({ content: host['hostname'] })),
        labels: labels.map((label: string) => ({ content: label }))
      }))
    );

    this.createForm();
    if (this.isEdit) {
      this.action = this.actionLabels.EDIT;
      this.smbForm.get('cluster_id').disable();
      this.smbForm.get('auth_mode').disable();
      this.route.params.subscribe((params: { cluster_id: string }) => {
        this.cluster_id = params.cluster_id;
      });

      this.smbService.getCluster(this.cluster_id).subscribe((res: SMBCluster) => {
        this.clusterResponse = res;

        const customDnsList = this.clusterResponse.custom_dns;
        const customDnsFormArray = this.smbForm.get('custom_dns') as FormArray;
        const joinSourcesArray = this.smbForm.get('joinSources') as FormArray;
        const pubAddresses = this.clusterResponse.public_addrs;
        const publicAddrsFormArray = this.smbForm.get('public_addrs') as FormArray;

        if (this.clusterResponse.clustering) {
          const responseClustering = this.clusterResponse.clustering;
          const upperFirstPipe = new UpperFirstPipe();
          const upperCaseCluster = upperFirstPipe.transform(responseClustering);
          this.smbForm.get('clustering').setValue(upperCaseCluster || '');
        }
        if (customDnsList?.length) {
          customDnsList.forEach((dns: string) => {
            customDnsFormArray.push(new FormControl(dns));
          });
        }
        if (this.clusterResponse.auth_mode == AUTHMODE.activeDirectory) {
          this.domainSettingsObject = this.clusterResponse?.domain_settings;
          this.smbForm.get('domain_settings').setValue(this.domainSettingsObject.realm);
        } else {
          if (
            this.clusterResponse.user_group_settings &&
            this.clusterResponse.user_group_settings.length > 0
          ) {
            this.clusterResponse.user_group_settings.forEach((JoinSource: JoinSource) => {
              joinSourcesArray.push(new FormControl(JoinSource.ref));
            });
            const joinSourceRef = this.clusterResponse.user_group_settings.map(
              (JoinSource: JoinSource) => JoinSource.ref
            );
            joinSourcesArray.setValue(joinSourceRef);
          }
        }
        this.smbForm.get('cluster_id').setValue(this.clusterResponse.cluster_id);
        this.smbForm.get('auth_mode').setValue(this.clusterResponse.auth_mode);
        if (this.clusterResponse.placement.count) {
          this.smbForm.get('count').setValue(this.clusterResponse.placement.count);
        }
        if (pubAddresses?.length) {
          pubAddresses.forEach((pubAddress: PublicAddress) => {
            publicAddrsFormArray.push(
              this.formBuilder.group({
                address: [pubAddress.address, Validators.required],
                destination: [pubAddress.destination || '']
              })
            );
          });
        }
      });
    } else {
      this.action = this.actionLabels.CREATE;
      this.hostsAndLabels$ = forkJoin({
        hosts: this.hostService.getAllHosts(),
        labels: this.hostService.getLabels()
      }).pipe(
        map(({ hosts, labels }) => ({
          hosts: hosts.map((host: Host) => ({ content: host['hostname'] })),
          labels: labels.map((label: string) => ({ content: label }))
        }))
      );
    }
    this.orchStatus$ = this.orchService.status();
    this.allClustering = Object.values(CLUSTERING);
    this.loadingReady();
    if (!this.isEdit) this.onAuthModeChange();
  }

  createForm() {
    this.smbForm = this.formBuilder.group({
      cluster_id: new FormControl('', {
        validators: [Validators.required]
      }),
      auth_mode: [
        AUTHMODE.activeDirectory,
        {
          validators: [Validators.required]
        }
      ],
      domain_settings: [null],
      placement: [{}],
      hosts: [[]],
      label: [
        null,
        [
          CdValidators.requiredIf({
            placement: 'label'
          })
        ]
      ],
      count: [1],
      custom_dns: new FormArray([]),
      joinSources: new FormArray([]),
      clustering: new UntypedFormControl(
        CLUSTERING.Default.charAt(0).toUpperCase() + CLUSTERING.Default.slice(1)
      ),
      public_addrs: new FormArray([])
    });

    this.orchService.status().subscribe((status) => {
      this.hasOrchestrator = status.available;
      this.smbForm.get('placement').setValue(this.hasOrchestrator ? PLACEMENT.host : '');
    });
  }

  multiSelector(event: any, field: 'label' | 'hosts') {
    if (field === PLACEMENT.host) this.selectedHosts = event.map((host: any) => host.content);
    else this.selectedLabels = event.map((label: any) => label.content);
  }

  onAuthModeChange() {
    const authMode = this.smbForm.get('auth_mode').value;
    const domainSettingsControl = this.smbForm.get('domain_settings');
    const userGroupSettingsControl = this.smbForm.get('joinSources') as FormArray;

    // User Group Setting should be optional if authMode is "Active Directory"
    if (authMode === AUTHMODE.activeDirectory) {
      if (userGroupSettingsControl) {
        userGroupSettingsControl.clear();
      }
      if (domainSettingsControl) {
        domainSettingsControl.setValidators(Validators.required);
        domainSettingsControl.updateValueAndValidity();
      }
      if (userGroupSettingsControl) {
        userGroupSettingsControl.clearValidators();
        userGroupSettingsControl.updateValueAndValidity();
      }
      // Domain Setting should be optional if authMode is "Users"
    } else if (authMode === AUTHMODE.User) {
      const control = new FormControl(null, Validators.required);
      userGroupSettingsControl.push(control);
      if (domainSettingsControl) {
        domainSettingsControl.setValue('');
        this.domainSettingsObject = { realm: '', join_sources: [] };
      }
      domainSettingsControl.setErrors(null);
      userGroupSettingsControl.setValidators(Validators.required);

      if (domainSettingsControl) {
        domainSettingsControl.clearValidators();
        domainSettingsControl.updateValueAndValidity();
      }
    } else {
      if (userGroupSettingsControl) {
        userGroupSettingsControl.clearValidators();
        userGroupSettingsControl.clear();
        userGroupSettingsControl.updateValueAndValidity();
      }
    }
  }

  submitAction() {
    const domainSettingsControl = this.smbForm.get('domain_settings');
    const authMode = this.smbForm.get('auth_mode').value;

    const values = this.smbForm.getRawValue();
    const serviceSpec: object = {
      placement: {}
    };
    switch (values['placement']) {
      case PLACEMENT.host:
        if (values['hosts'].length > 0) {
          serviceSpec['placement']['hosts'] = this.selectedHosts;
        }
        break;
      case PLACEMENT.label:
        serviceSpec['placement']['label'] = this.selectedLabels;
        break;
    }

    // Domain Setting should be mandatory if authMode is "Active Directory"
    if (authMode === AUTHMODE.activeDirectory && !domainSettingsControl.value) {
      domainSettingsControl.setErrors({ required: true });
      this.smbForm.markAllAsTouched();
      return;
    }
    if (this.isEdit) {
      this.handleTaskRequest(URLVerbs.EDIT);
    } else {
      this.handleTaskRequest(URLVerbs.CREATE);
    }
  }

  handleTaskRequest(urlVerb: string) {
    const requestModel = this.buildRequest();
    const component = this;
    const cluster_id = this.smbForm.get('cluster_id').value;

    this.taskWrapperService
      .wrapTaskAroundCall({
        task: new FinishedTask(`${CLUSTER_PATH}/${urlVerb}`, { cluster_id }),
        call: this.smbService.createCluster(requestModel)
      })
      .subscribe({
        complete: () => {
          this.router.navigate([CLUSTER_PATH]);
        },
        error: () => {
          component.smbForm.setErrors({ cdSubmitButton: true });
        }
      });
  }

  private buildRequest() {
    const values = this.smbForm.getRawValue();
    const rawFormValue = _.cloneDeep(this.smbForm.value);
    const clusterId = this.smbForm.get('cluster_id')?.value;
    const authMode = this.smbForm.get('auth_mode')?.value;

    const joinSources: JoinSource[] = (this.domainSettingsObject?.join_sources || [])
      .filter((source: { ref: string }) => source.ref)
      .map((source: { ref: string }) => ({
        ref: source.ref,
        sourceType: RESOURCE.Resource
      }));

    const joinSourceObj = joinSources.map((source: JoinSource) => ({
      sourceType: RESOURCE.Resource,
      ref: source.ref
    }));

    const domainSettings = {
      realm: this.domainSettingsObject?.realm,
      join_sources: joinSourceObj
    };

    const requestModel: ClusterRequestModel = {
      cluster_resource: {
        resource_type: CLUSTER_RESOURCE,
        cluster_id: clusterId,
        auth_mode: authMode
      }
    };

    if (domainSettings && domainSettings.join_sources.length > 0) {
      requestModel.cluster_resource.domain_settings = domainSettings;
    }
    if (rawFormValue.joinSources?.length > 0) {
      requestModel.cluster_resource.user_group_settings = rawFormValue.joinSources.map(
        (source: { ref: string }) => ({
          source_type: RESOURCE.Resource,
          ref: source
        })
      );
    }

    const serviceSpec = this.getPlacementSpec(values);
    if (serviceSpec) {
      requestModel.cluster_resource.placement = serviceSpec;
    }

    if (rawFormValue.custom_dns?.length > 0) {
      requestModel.cluster_resource.custom_dns = rawFormValue.custom_dns;
    }

    if (rawFormValue.public_addrs?.length > 0) {
      requestModel.cluster_resource.public_addrs = rawFormValue.public_addrs.map(
        (publicAddress: PublicAddress) => {
          return publicAddress.destination ? publicAddress : { address: publicAddress.address };
        }
      );
    }

    if (rawFormValue.clustering && rawFormValue.clustering.toLowerCase() !== CLUSTERING.Default) {
      requestModel.cluster_resource.clustering = rawFormValue.clustering.toLowerCase();
    }

    if (rawFormValue.placement.count) {
      requestModel.cluster_resource.count = rawFormValue.placement.count;
    }

    return requestModel;
  }

  getPlacementSpec(values: CephServicePlacement) {
    const serviceSpec = {
      placement: {}
    };

    serviceSpec['placement']['count'] = values.count;

    switch (values['placement']) {
      case 'hosts':
        if (values['hosts'].length > 0) {
          serviceSpec['placement']['hosts'] = this.selectedHosts;
          serviceSpec['placement']['count'] = values.count;
        }
        break;
      case 'label':
        serviceSpec['placement']['label'] = this.selectedLabels;
        serviceSpec['placement']['count'] = values.count;
        break;
    }

    return serviceSpec.placement;
  }

  editDomainSettingsModal() {
    this.modalService.show(SmbDomainSettingModalComponent, {
      domainSettingsObject: this.domainSettingsObject
    });
  }

  deleteDomainSettingsModal() {
    this.smbForm.get('domain_settings')?.setValue('');
    this.domainSettingsObject = { realm: '', join_sources: [] };
  }

  get joinSources() {
    return this.smbForm.get('joinSources') as FormArray;
  }

  get custom_dns() {
    return this.smbForm.get('custom_dns') as FormArray;
  }

  get public_addrs() {
    return this.smbForm.get('public_addrs') as FormArray;
  }

  addUserGroupSetting() {
    const control = new FormControl(null, Validators.required);
    this.joinSources.push(control);
  }

  navigateCreateUsersGroups() {
    this.router.navigate([`${USERSGROUPS_PATH}/${URLVerbs.CREATE}`]);
  }

  addCustomDns() {
    const control = new FormControl('', Validators.required);
    this.custom_dns.push(control);
  }

  addPublicAddrs() {
    const control = this.formBuilder.group({
      address: ['', Validators.required],
      destination: ['']
    });
    this.public_addrs.push(control);
  }

  removeUserGroupSetting(index: number) {
    this.joinSources.removeAt(index);
    this.cd.detectChanges();
  }

  removeCustomDNS(index: number) {
    this.custom_dns.removeAt(index);
    this.cd.detectChanges();
  }

  removePublicAddrs(index: number) {
    this.public_addrs.removeAt(index);
    this.cd.detectChanges();
  }
}
