import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
import { Permissions } from '~/app/shared/models/permissions';

@Component({
  selector: 'cd-multi-cluster-details',
  templateUrl: './multi-cluster-details.component.html',
  styleUrls: ['./multi-cluster-details.component.scss']
})
export class MultiClusterDetailsComponent {
  @Input()
  permissions: Permissions;

  @Input()
  selection: any;

  clusterDetailsTitle: string;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.clusterDetailsTitle = localeId.startsWith('zh') ? '集群详情' : 'Cluster details';
  }

  get selectedClusterFsid(): string {
    return this.selection !== undefined ? this.selection['name'] : null;
  }
}
