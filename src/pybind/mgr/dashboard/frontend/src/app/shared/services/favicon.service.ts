import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { SummaryService } from './summary.service';

@Injectable()
export class FaviconService implements OnDestroy {
  sub: Subscription;
  oldStatus: string;
  url: string;

  constructor(
    @Inject(DOCUMENT) private document: HTMLDocument,
    private summaryService: SummaryService
  ) {}

  init() {
    this.url = this.document.getElementById('cdFavicon')?.getAttribute('href');

    this.sub = this.summaryService.subscribe((summary) => {
      this.changeIcon(summary.health_status);
    });
  }

  changeIcon(status?: string) {
    if (status === this.oldStatus) {
      return;
    }

    this.oldStatus = status;

    const favicon = this.document.getElementById('cdFavicon');
    if (favicon && this.url) {
      favicon.setAttribute('href', this.url);
    }
  }

  ngOnDestroy() {
    this.changeIcon();
    this.sub?.unsubscribe();
  }
}
