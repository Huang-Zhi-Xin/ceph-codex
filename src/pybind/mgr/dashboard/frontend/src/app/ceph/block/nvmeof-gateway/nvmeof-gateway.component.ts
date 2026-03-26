import { Component, Inject, LOCALE_ID, OnInit, TemplateRef, ViewChild } from '@angular/core';

import _ from 'lodash';

import { ActionLabelsI18n } from '~/app/shared/constants/app.constants';
import { CdTableSelection } from '~/app/shared/models/cd-table-selection';

import { GroupsComboboxItem, NvmeofService } from '../../../shared/api/nvmeof.service';
import { CephServiceSpec } from '~/app/shared/models/service.interface';
import { CephServiceService } from '~/app/shared/api/ceph-service.service';
import { Daemon } from '~/app/shared/models/daemon.interface';

type Gateway = {
  id: string;
  hostname: string;
  status: number;
  status_desc: string;
};

enum TABS {
  'gateways',
  'overview'
}

const DEFAULT_PLACEHOLDER = $localize`Enter group name`;

@Component({
  selector: 'cd-nvmeof-gateway',
  templateUrl: './nvmeof-gateway.component.html',
  styleUrls: ['./nvmeof-gateway.component.scss']
})
export class NvmeofGatewayComponent implements OnInit {
  selectedTab: TABS;
  isZhHans: boolean;
  gatewaysTabLabel: string;
  overviewTabLabel: string;
  performanceTabLabel: string;
  gatewaysLegendLabel: string;
  gatewaysLegendDescription: string;
  selectedGatewayGroupLabel: string;
  overviewTitle: string;
  performanceTitle: string;

  onSelected(tab: TABS) {
    this.selectedTab = tab;
  }

  public get Tabs(): typeof TABS {
    return TABS;
  }

  @ViewChild('statusTpl', { static: true })
  statusTpl: TemplateRef<any>;

  gateways: Gateway[] = [];
  gatewayColumns: any;
  selection = new CdTableSelection();
  gwGroups: GroupsComboboxItem[] = [];
  groupService: string = null;
  selectedGatewayGroup: string = null;
  gwGroupsEmpty: boolean = false;
  gwGroupPlaceholder: string = DEFAULT_PLACEHOLDER;

  constructor(
    private nvmeofService: NvmeofService,
    private cephServiceService: CephServiceService,
    public actionLabels: ActionLabelsI18n,
    @Inject(LOCALE_ID) localeId: string
  ) {
    this.isZhHans = localeId.startsWith('zh');
    this.gatewaysTabLabel = this.isZhHans ? '网关' : 'Gateways';
    this.overviewTabLabel = this.isZhHans ? '概览' : 'Overview';
    this.performanceTabLabel = this.isZhHans ? '性能' : 'Performance';
    this.gatewaysLegendLabel = this.isZhHans ? '网关' : 'Gateways';
    this.selectedGatewayGroupLabel = this.isZhHans ? '已选网关组' : 'Selected Gateway Group';
    this.overviewTitle = this.isZhHans ? '网关概览' : 'Gateway overview';
    this.performanceTitle = this.isZhHans ? '网关性能' : 'Gateway performance';
    this.gatewaysLegendDescription = this.isZhHans
      ? 'Ceph NVMe-oF 网关通过 NVMe/TCP 提供 Ceph 块设备存储。对 VMware 客户端，这些卷会显示为 VMFS 数据存储；对 Linux 客户端，这些卷会显示为块设备。'
      : 'Ceph NVMe-oF gateways provide Ceph Block Device storage through NVMe/TCP. For VMware clients the NVMe/TCP volumes display as VMFS Datastores. For Linux clients the NVMe/TCP volumes display as block devices.';
  }

  ngOnInit() {
    this.setGatewayGroups();
    this.gatewayColumns = [
      {
        name: $localize`Gateway ID`,
        prop: 'id'
      },
      {
        name: $localize`Hostname`,
        prop: 'hostname'
      },
      {
        name: $localize`Status`,
        prop: 'status_desc',
        cellTemplate: this.statusTpl
      }
    ];
  }

  // for Status column
  getStatusClass(row: Gateway): string {
    return _.get(
      {
        '-1': 'badge-danger',
        '0': 'badge-warning',
        '1': 'badge-success'
      },
      row.status,
      'badge-dark'
    );
  }

  // Gateways
  getGateways() {
    this.cephServiceService.getDaemons(this.groupService).subscribe((daemons: Daemon[]) => {
      this.gateways = daemons.length
        ? daemons.map((daemon: Daemon) => {
            return {
              id: `client.${daemon.daemon_name}`,
              hostname: daemon.hostname,
              status_desc: daemon.status_desc,
              status: daemon.status
            };
          })
        : [];
    });
  }

  // Gateway groups
  onGroupSelection(selected: GroupsComboboxItem) {
    selected.selected = true;
    this.groupService = selected.serviceName;
    this.selectedGatewayGroup = selected.content;
    this.getGateways();
  }

  onGroupClear() {
    this.groupService = null;
    this.getGateways();
  }

  setGatewayGroups() {
    this.nvmeofService.listGatewayGroups().subscribe((response: CephServiceSpec[][]) => {
      if (response?.[0]?.length) {
        this.gwGroups = this.nvmeofService.formatGwGroupsList(response, true);
      } else this.gwGroups = [];
      // Select first group if no group is selected
      if (!this.groupService && this.gwGroups.length) {
        this.onGroupSelection(this.gwGroups[0]);
        this.gwGroupsEmpty = false;
        this.gwGroupPlaceholder = DEFAULT_PLACEHOLDER;
      } else {
        this.gwGroupsEmpty = true;
        this.gwGroupPlaceholder = this.isZhHans ? '无可用组' : $localize`No groups available`;
      }
    });
  }
}
