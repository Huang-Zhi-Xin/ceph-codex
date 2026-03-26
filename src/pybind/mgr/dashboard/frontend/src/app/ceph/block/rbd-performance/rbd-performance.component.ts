import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'cd-rbd-performance',
  templateUrl: './rbd-performance.component.html',
  styleUrls: ['./rbd-performance.component.scss']
})
export class RbdPerformanceComponent {
  overviewTitle: string;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    this.overviewTitle = localeId.startsWith('zh') ? 'RBD 概览' : 'RBD overview';
  }
}
