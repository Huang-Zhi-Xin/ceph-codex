import { Component, EventEmitter, Inject, LOCALE_ID, OnInit, Output } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import _ from 'lodash';

import { RgwBucketService } from '~/app/shared/api/rgw-bucket.service';
import { ActionLabelsI18n } from '~/app/shared/constants/app.constants';
import { NotificationType } from '~/app/shared/enum/notification-type.enum';
import { CdFormBuilder } from '~/app/shared/forms/cd-form-builder';
import { CdFormGroup } from '~/app/shared/forms/cd-form-group';
import { CdValidators } from '~/app/shared/forms/cd-validators';
import { NotificationService } from '~/app/shared/services/notification.service';
import {
  rgwBucketEncryptionModel,
  KMS_PROVIDER,
  ENCRYPTION_TYPE
} from '../models/rgw-bucket-encryption';
import { TableComponent } from '~/app/shared/datatable/table/table.component';
import { KmipConfig, VaultConfig } from '~/app/shared/models/rgw-encryption-config-keys';

@Component({
  selector: 'cd-rgw-config-modal',
  templateUrl: './rgw-config-modal.component.html',
  styleUrls: ['./rgw-config-modal.component.scss']
})
export class RgwConfigModalComponent implements OnInit {
  kmsProviders: string[];

  configForm: CdFormGroup;

  @Output()
  submitAction = new EventEmitter();
  authMethods: string[];
  secretEngines: string[];

  selectedEncryptionConfigValues: any = {};
  allEncryptionConfigValues: any = [];
  editing = false;
  action: string;
  table: TableComponent;
  ENCRYPTION_TYPE = ENCRYPTION_TYPE;
  KMS_PROVIDER = KMS_PROVIDER;
  isZhHans = false;
  constructor(
    private formBuilder: CdFormBuilder,
    public activeModal: NgbActiveModal,
    public actionLabels: ActionLabelsI18n,
    private rgwBucketService: RgwBucketService,
    private notificationService: NotificationService,
    @Inject(LOCALE_ID) private localeId: string
  ) {
    this.isZhHans = this.localeId.startsWith('zh');
    this.createForm();
  }

  get formTitle(): string {
    return `${this.isZhHans ? '编辑' : this.action} ${this.isZhHans ? 'RGW 加密配置' : 'RGW Encryption Configurations'}`;
  }

  get secretPathPlaceholder(): string {
    return '/v1/secret/data';
  }

  get namespacePlaceholder(): string {
    return 'tenant1';
  }

  get addressPlaceholder(): string {
    return 'http://127.0.0.1:8000';
  }

  get keyTemplatePlaceholder(): string {
    return '$keyid';
  }

  get caCertPathPlaceholder(): string {
    return '/path/to/ca_cert.pem';
  }

  get clientCertPathPlaceholder(): string {
    return '/path/to/client_cert.pem';
  }

  get clientKeyPathPlaceholder(): string {
    return '/path/to/client_key.pem';
  }

  get submitText(): string {
    return this.isZhHans ? '提交' : this.actionLabels.SUBMIT;
  }

  get encryptionTypeLabel(): string {
    return this.isZhHans ? '加密类型' : 'Encryption Type';
  }

  get kmsProviderLabel(): string {
    return this.isZhHans ? '密钥管理服务提供方' : 'Key management service provider';
  }

  get kmsProviderHelpText(): string {
    return this.isZhHans ? '加密密钥的存储位置。' : 'Where the encryption keys are stored.';
  }

  get authenticationMethodLabel(): string {
    return this.isZhHans ? '认证方式' : 'Authentication Method';
  }

  get authenticationMethodHelpText(): string {
    return this.isZhHans ? '与 Vault 一起使用的认证方式类型。' : 'Type of authentication method to be used with Vault';
  }

  get secretEngineLabel(): string {
    return this.isZhHans ? 'Secret Engine' : 'Secret Engine';
  }

  get secretEngineHelpText(): string {
    return this.isZhHans ? '用于检索加密密钥的 Vault Secret Engine。' : 'Vault Secret Engine to be used to retrieve encryption keys.';
  }

  get secretPathLabel(): string {
    return this.isZhHans ? 'Secret Path' : 'Secret Path';
  }

  get secretPathHelpText(): string {
    return this.isZhHans
      ? 'Vault 密钥 URL 前缀，可用于将访问限制在 Vault 密钥空间的特定子集。'
      : 'Vault secret URL prefix, which can be used to restrict access to a particular subset of the Vault secret space.';
  }

  get namespaceLabel(): string {
    return this.isZhHans ? '命名空间' : 'Namespace';
  }

  get namespaceHelpText(): string {
    return this.isZhHans ? '用于选择你的租户的 Vault Namespace。' : 'Vault Namespace to be used to select your tenant.';
  }

  get vaultAddressLabel(): string {
    return this.isZhHans ? 'Vault 地址' : 'Vault Address';
  }

  get vaultAddressHelpText(): string {
    return this.isZhHans ? 'Vault 服务器基础地址。' : 'Vault server base address.';
  }

  get tokenLabel(): string {
    return this.isZhHans ? '令牌' : 'Token';
  }

  get tokenFileHelpText(): string {
    return this.isZhHans
      ? "如果认证方式为 'token'，请提供令牌文件路径。"
      : "If authentication method is 'token', provide a path to the token file.";
  }

  get caCertificatePathLabel(): string {
    return this.isZhHans ? 'CA 证书路径' : 'CA Certificate Path';
  }

  get caCertificatePathHelpText(): string {
    return this.isZhHans ? '访问服务器时使用的自定义 CA 证书路径。' : 'Path for custom ca certificate for accessing server';
  }

  get clientCertificatePathLabel(): string {
    return this.isZhHans ? '客户端证书路径' : 'Client Certificate Path';
  }

  get clientCertificatePathHelpText(): string {
    return this.isZhHans ? '访问服务器时使用的自定义客户端证书路径。' : 'Path for custom client certificate for accessing server';
  }

  get clientPrivateKeyPathLabel(): string {
    return this.isZhHans ? '客户端私钥路径' : 'Client Private Key Path';
  }

  get clientPrivateKeyPathHelpText(): string {
    return this.isZhHans ? '客户端证书所需的私钥路径。' : 'Path for private key required for client cert';
  }
  ngOnInit(): void {
    this.kmsProviders = rgwBucketEncryptionModel.kmsProviders;
    this.authMethods = rgwBucketEncryptionModel.authMethods;
    this.secretEngines = rgwBucketEncryptionModel.secretEngines;
    if (this.editing && this.selectedEncryptionConfigValues) {
      const patchValues = {
        addr: this.selectedEncryptionConfigValues['addr'],
        encryptionType: this.selectedEncryptionConfigValues['encryption_type'],
        kms_provider: this.selectedEncryptionConfigValues['backend'],
        auth: this.selectedEncryptionConfigValues['auth'],
        secret_engine: this.selectedEncryptionConfigValues['secret_engine'],
        secret_path: this.selectedEncryptionConfigValues['prefix'],
        namespace: this.selectedEncryptionConfigValues['namespace'],
        kms_key_template: this.selectedEncryptionConfigValues['kms_key_template'],
        s3_key_template: this.selectedEncryptionConfigValues['s3_key_template'],
        username: this.selectedEncryptionConfigValues['username'],
        password: this.selectedEncryptionConfigValues['password'],
        ssl_cert:
          this.selectedEncryptionConfigValues['backend'] === KMS_PROVIDER.VAULT
            ? this.selectedEncryptionConfigValues['ssl_cacert']
            : this.selectedEncryptionConfigValues['ca_path'],
        client_cert:
          this.selectedEncryptionConfigValues['backend'] === KMS_PROVIDER.VAULT
            ? this.selectedEncryptionConfigValues['ssl_clientcert']
            : this.selectedEncryptionConfigValues['client_cert'],
        client_key:
          this.selectedEncryptionConfigValues['backend'] === KMS_PROVIDER.VAULT
            ? this.selectedEncryptionConfigValues['ssl_clientkey']
            : this.selectedEncryptionConfigValues['client_key']
      };
      this.configForm.patchValue(patchValues);
      this.configForm.get('kms_provider').disable();
    }
    this.checkKmsProviders();
  }

  setKmsProvider() {
    const selectedEncryptionType = this.configForm.get('encryptionType').value;
    this.kmsProviders =
      selectedEncryptionType === ENCRYPTION_TYPE.SSE_KMS
        ? [KMS_PROVIDER.VAULT, KMS_PROVIDER.KMIP]
        : [KMS_PROVIDER.VAULT];
  }
  checkKmsProviders() {
    if (!this.editing) {
      this.setKmsProvider();
    }

    if (
      this.allEncryptionConfigValues &&
      this.allEncryptionConfigValues.hasOwnProperty(ENCRYPTION_TYPE.SSE_KMS) &&
      !this.editing
    ) {
      const kmsBackends = Object.values(
        this.allEncryptionConfigValues[ENCRYPTION_TYPE.SSE_KMS]
      ).map((config: any) => config.backend);
      if (this.configForm.get('encryptionType').value === ENCRYPTION_TYPE.SSE_KMS) {
        this.kmsProviders = this.kmsProviders.filter((provider) => !kmsBackends.includes(provider));
      }
    }
    if (
      this.allEncryptionConfigValues &&
      this.allEncryptionConfigValues.hasOwnProperty('s3') &&
      !this.editing
    ) {
      const s3Backends = Object.values(this.allEncryptionConfigValues[ENCRYPTION_TYPE.SSE_S3]).map(
        (config: any) => config.backend
      );
      if (this.configForm.get('encryptionType').value === ENCRYPTION_TYPE.SSE_S3) {
        this.kmsProviders = this.kmsProviders.filter((provider) => !s3Backends.includes(provider));
      }
    }
    if (!this.editing) {
      if (this.kmsProviders.length > 0) {
        this.configForm.get('kms_provider').setValue(this.kmsProviders[0]);
      }
    }
  }

  createForm() {
    this.configForm = this.formBuilder.group({
      addr: [null, [CdValidators.urlWithProtocolOption(false), Validators.required]],
      kms_provider: ['vault', Validators.required],
      encryptionType: ['kms', Validators.required],
      auth: [
        'token',
        CdValidators.requiredIf({
          kms_provider: 'vault'
        })
      ],
      secret_engine: [
        'kv',
        CdValidators.requiredIf({
          kms_provider: 'vault'
        })
      ],
      secret_path: ['/'],
      namespace: [null],
      token: [
        null,
        [
          CdValidators.requiredIf({
            auth: 'token',
            kms_provider: 'vault'
          })
        ]
      ],
      ssl_cert: [''],
      client_cert: [''],
      client_key: [''],
      kmsEnabled: [{ value: false }],
      s3Enabled: [{ value: false }],
      kms_key_template: [null],
      s3_key_template: [null],
      username: [''],
      password: ['']
    });
  }

  fileUpload(files: FileList, controlName: string) {
    const file: File = files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const control: AbstractControl = this.configForm.get(controlName);
      control.setValue(file);
      control.markAsDirty();
      control.markAsTouched();
      control.updateValueAndValidity();
    });
  }

  onSubmit() {
    const values = this.configForm.getRawValue();
    let encryptionData: VaultConfig | KmipConfig;
    if (values['kms_provider'] === KMS_PROVIDER.VAULT) {
      encryptionData = {
        kms_provider: values['kms_provider'],
        encryption_type: values['encryptionType'],
        config: {
          addr: values['addr'],
          auth: values['auth'],
          prefix: values['secret_path'],
          secret_engine: values['secret_engine'],
          namespace: values['namespace'],
          token_file: values['token'],
          ssl_cacert: values['ssl_cert'],
          ssl_clientcert: values['client_cert'],
          ssl_clientkey: values['client_key']
        }
      };
    } else if (values['kms_provider'] === KMS_PROVIDER.KMIP) {
      encryptionData = {
        kms_provider: values['kms_provider'],
        encryption_type: values['encryptionType'],
        config: {
          addr: values['addr'],
          username: values['username'],
          password: values['password'],
          kms_key_template: values['kms_key_template'],
          s3_key_template: values['s3_key_template'],
          client_key: values['client_key'],
          ca_path: values['ssl_cert'],
          client_cert: values['client_cert']
        }
      };
    }
    this.rgwBucketService.setEncryptionConfig(encryptionData).subscribe({
      next: () => {
        this.notificationService.show(
          NotificationType.success,
          $localize`Updated RGW Encryption Configuration values`
        );
      },
      error: (error: Error) => {
        this.notificationService.show(NotificationType.error, error.message);
        this.configForm.setErrors({ cdSubmitButton: true });
      },
      complete: () => {
        this.activeModal.close();
        this.table?.refreshBtn();
      }
    });
  }
}
