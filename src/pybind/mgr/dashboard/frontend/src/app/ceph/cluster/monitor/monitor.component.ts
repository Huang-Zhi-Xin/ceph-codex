import { Component, Inject, LOCALE_ID } from '@angular/core';

import _ from 'lodash';

import { MonitorService } from '~/app/shared/api/monitor.service';
import { CellTemplate } from '~/app/shared/enum/cell-template.enum';

@Component({
  selector: 'cd-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent {
  mon_status: any;
  inQuorum: any;
  notInQuorum: any;
  quorumConLabel: string;
  quorumMonLabel: string;
  requiredConLabel: string;
  requiredMonLabel: string;
  clusterIdLabel: string;
  monmapModifiedLabel: string;
  monmapEpochLabel: string;
  inQuorumLabel: string;
  notInQuorumLabel: string;

  interval: any;

  constructor(
    private monitorService: MonitorService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    const isZhHans = localeId.startsWith('zh');
    this.quorumConLabel = isZhHans ? '法定人数 con' : $localize`quorum con`;
    this.quorumMonLabel = isZhHans ? '法定人数 mon' : $localize`quorum mon`;
    this.requiredConLabel = isZhHans ? '所需 con' : $localize`required con`;
    this.requiredMonLabel = isZhHans ? '所需 mon' : $localize`required mon`;
    this.clusterIdLabel = isZhHans ? '集群 ID' : 'Cluster ID';
    this.monmapModifiedLabel = isZhHans ? 'monmap 修改时间' : 'monmap modified';
    this.monmapEpochLabel = isZhHans ? 'monmap 纪元' : 'monmap epoch';
    this.inQuorumLabel = isZhHans ? '法定人数内' : 'In Quorum';
    this.notInQuorumLabel = isZhHans ? '不在法定人数内' : 'Not In Quorum';
    this.inQuorum = {
      columns: [
        { prop: 'name', name: $localize`Name`, cellTransformation: CellTemplate.routerLink },
        { prop: 'rank', name: $localize`Rank` },
        { prop: 'public_addr', name: $localize`Public Address` },
        {
          prop: 'cdOpenSessions',
          name: $localize`Open Sessions`,
          cellTransformation: CellTemplate.sparkline,
          comparator: (dataA: any, dataB: any) => {
            // We get the last value of time series to compare:
            const lastValueA = _.last(dataA);
            const lastValueB = _.last(dataB);

            if (!lastValueA || !lastValueB || lastValueA === lastValueB) {
              return 0;
            }

            return lastValueA > lastValueB ? 1 : -1;
          }
        }
      ]
    };

    this.notInQuorum = {
      columns: [
        { prop: 'name', name: $localize`Name`, cellTransformation: CellTemplate.routerLink },
        { prop: 'rank', name: $localize`Rank` },
        { prop: 'public_addr', name: $localize`Public Address` }
      ]
    };
  }

  refresh() {
    this.monitorService.getMonitor().subscribe((data: any) => {
      data.in_quorum.map((row: any) => {
        row.cdOpenSessions = row.stats.num_sessions.map((i: string) => i[1]);
        row.cdLink = '/perf_counters/mon/' + row.name;
        row.cdParams = { fromLink: '/monitor' };
        return row;
      });

      data.out_quorum.map((row: any) => {
        row.cdLink = '/perf_counters/mon/' + row.name;
        row.cdParams = { fromLink: '/monitor' };
        return row;
      });

      this.inQuorum.data = [...data.in_quorum];
      this.notInQuorum.data = [...data.out_quorum];
      this.mon_status = data.mon_status;
    });
  }
}
