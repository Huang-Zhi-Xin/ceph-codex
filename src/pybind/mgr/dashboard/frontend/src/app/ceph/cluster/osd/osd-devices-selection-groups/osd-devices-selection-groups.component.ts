import { Component, EventEmitter, Inject, Input, LOCALE_ID, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import _ from 'lodash';

import { InventoryDevice } from '~/app/ceph/cluster/inventory/inventory-devices/inventory-device.model';
import { OsdService } from '~/app/shared/api/osd.service';
import { Icons } from '~/app/shared/enum/icons.enum';
import { CdTableColumnFiltersChange } from '~/app/shared/models/cd-table-column-filters-change';
import { ModalService } from '~/app/shared/services/modal.service';
import { OsdDevicesSelectionModalComponent } from '../osd-devices-selection-modal/osd-devices-selection-modal.component';
import { DevicesSelectionChangeEvent } from './devices-selection-change-event.interface';
import { DevicesSelectionClearEvent } from './devices-selection-clear-event.interface';

@Component({
  selector: 'cd-osd-devices-selection-groups',
  templateUrl: './osd-devices-selection-groups.component.html',
  styleUrls: ['./osd-devices-selection-groups.component.scss']
})
export class OsdDevicesSelectionGroupsComponent implements OnInit, OnChanges {
  // data, wal, db
  @Input() type: string;

  // Data, WAL, DB
  @Input() name: string;

  @Input() hostname: string;

  @Input() availDevices: InventoryDevice[];

  @Input() canSelect: boolean;

  @Output()
  selected = new EventEmitter<DevicesSelectionChangeEvent>();

  @Output()
  cleared = new EventEmitter<DevicesSelectionClearEvent>();

  icons = Icons;
  devices: InventoryDevice[] = [];
  capacity = 0;
  appliedFilters = new Array();
  expansionCanSelect = false;
  isOsdPage: boolean;
  isZhHans: boolean;

  addButtonTooltip: String;
  tooltips = {
    noAvailDevices: $localize`No available devices`,
    addPrimaryFirst: $localize`Please add primary devices first`,
    addByFilters: $localize`Add devices by using filters`
  };

  constructor(
    private modalService: ModalService,
    public osdService: OsdService,
    private router: Router,
    @Inject(LOCALE_ID) localeId: string
  ) {
    this.isOsdPage = this.router.url.includes('/osd');
    this.isZhHans = localeId.startsWith('zh');
  }

  get deviceDescription(): string {
    if (this.type === 'data') {
      return this.isZhHans
        ? '主存储设备。这些设备承载全部 OSD 数据。'
        : 'The primary storage devices. These devices contain all OSD data.';
    }
    if (this.type === 'wal') {
      return this.isZhHans
        ? 'WAL 设备用于 BlueStore 的内部日志。仅当该设备比主设备更快时才有意义，例如 NVME 或 SSD。如果可用的高速存储很少，例如不足 1 GB，建议优先将其用于 WAL。'
        : 'Write-Ahead-Log devices. These devices are used for BlueStore’s internal journal. It is only useful to use a WAL device if the device is faster than the primary device (e.g. NVME devices or SSDs). If there is only a small amount of fast storage available (e.g., less than a gigabyte), we recommend using it as a WAL device.';
    }
    return this.isZhHans
      ? 'DB 设备可用于存储 BlueStore 的内部元数据。仅当该设备比主设备更快时才值得单独配置，例如 NVME 或 SSD。'
      : 'DB devices can be used for storing BlueStore’s internal metadata. It is only helpful to provision a DB device if it is faster than the primary device (e.g. NVME devices or SSD).';
  }

  ngOnInit() {
    if (!this.isOsdPage) {
      this.osdService?.osdDevices[this.type]
        ? (this.devices = this.osdService.osdDevices[this.type])
        : (this.devices = []);
      this.capacity = _.sumBy(this.devices, 'sys_api.size');
      this.osdService?.osdDevices
        ? (this.expansionCanSelect = this.osdService?.osdDevices['disableSelect'])
        : (this.expansionCanSelect = false);
    }
    this.updateAddButtonTooltip();
  }

  ngOnChanges() {
    this.updateAddButtonTooltip();
  }

  showSelectionModal() {
    const filterColumns = [
      'hostname',
      'human_readable_type',
      'sys_api.vendor',
      'sys_api.model',
      'sys_api.size'
    ];
    const diskType = this.name === 'Primary' ? 'hdd' : 'ssd';
    const initialState = {
      hostname: this.hostname,
      deviceType: this.name,
      diskType: diskType,
      devices: this.availDevices,
      filterColumns: filterColumns
    };
    const modalRef = this.modalService.show(OsdDevicesSelectionModalComponent, initialState, {
      size: 'xl'
    });
    modalRef.componentInstance.submitAction.subscribe((result: CdTableColumnFiltersChange) => {
      this.devices = result.data;
      this.capacity = _.sumBy(this.devices, 'sys_api.size');
      this.appliedFilters = result.filters;
      const event = _.assign({ type: this.type }, result);
      if (!this.isOsdPage) {
        this.osdService.osdDevices[this.type] = this.devices;
        this.osdService.osdDevices['disableSelect'] =
          this.canSelect || this.devices.length === this.availDevices.length;
        this.osdService.osdDevices[this.type]['capacity'] = this.capacity;
      }
      this.selected.emit(event);
    });
  }

  private updateAddButtonTooltip() {
    if (this.type === 'data' && this.availDevices.length === 0) {
      this.addButtonTooltip = this.tooltips.noAvailDevices;
    } else {
      if (!this.canSelect) {
        // No primary devices added yet.
        this.addButtonTooltip = this.tooltips.addPrimaryFirst;
      } else if (this.availDevices.length === 0) {
        this.addButtonTooltip = this.tooltips.noAvailDevices;
      } else {
        this.addButtonTooltip = this.tooltips.addByFilters;
      }
    }
  }

  clearDevices() {
    if (!this.isOsdPage) {
      this.expansionCanSelect = false;
      this.osdService.osdDevices['disableSelect'] = false;
      this.osdService.osdDevices = [];
    }
    const event = {
      type: this.type,
      clearedDevices: [...this.devices]
    };
    this.devices = [];
    this.cleared.emit(event);
  }
}
