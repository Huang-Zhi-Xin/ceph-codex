import { Component, EventEmitter, Inject, LOCALE_ID, Output } from '@angular/core';

import moment from 'moment';

@Component({
  selector: 'cd-dashboard-time-selector',
  templateUrl: './dashboard-time-selector.component.html',
  styleUrls: ['./dashboard-time-selector.component.scss']
})
export class DashboardTimeSelectorComponent {
  @Output()
  selectedTime = new EventEmitter<any>();

  times: any;
  time: any;
  isZhHans: boolean;

  constructor(@Inject(LOCALE_ID) private localeId: string) {
    this.isZhHans = this.localeId.startsWith('zh');
    this.times = [
      {
        name: this.isZhHans ? '过去 5 分钟' : 'Last 5 minutes',
        value: this.timeToDate(5 * 60, 1)
      },
      {
        name: this.isZhHans ? '过去 15 分钟' : 'Last 15 minutes',
        value: this.timeToDate(15 * 60, 3)
      },
      {
        name: this.isZhHans ? '过去 30 分钟' : 'Last 30 minutes',
        value: this.timeToDate(30 * 60, 7)
      },
      {
        name: this.isZhHans ? '过去 1 小时' : 'Last 1 hour',
        value: this.timeToDate(3600, 14)
      },
      {
        name: this.isZhHans ? '过去 3 小时' : 'Last 3 hours',
        value: this.timeToDate(3 * 3600, 42)
      },
      {
        name: this.isZhHans ? '过去 6 小时' : 'Last 6 hours',
        value: this.timeToDate(6 * 3600, 84)
      },
      {
        name: this.isZhHans ? '过去 12 小时' : 'Last 12 hours',
        value: this.timeToDate(12 * 3600, 168)
      },
      {
        name: this.isZhHans ? '过去 24 小时' : 'Last 24 hours',
        value: this.timeToDate(24 * 3600, 336)
      }
    ];
    this.time = this.times[3].value;
  }

  emitTime() {
    this.selectedTime.emit(this.timeToDate(this.time.end - this.time.start, this.time.step));
  }

  public timeToDate(secondsAgo: number, step: number): any {
    const date: number = moment().unix() - secondsAgo;
    const dateNow: number = moment().unix();
    const formattedDate: any = {
      start: date,
      end: dateNow,
      step: step
    };
    return formattedDate;
  }
}
