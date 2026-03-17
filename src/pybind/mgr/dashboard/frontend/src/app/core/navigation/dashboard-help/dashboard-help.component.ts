import { Component, Inject, LOCALE_ID } from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { ModalCdsService } from '~/app/shared/services/modal-cds.service';

@Component({
  selector: 'cd-dashboard-help',
  templateUrl: './dashboard-help.component.html',
  styleUrls: ['./dashboard-help.component.scss']
})
export class DashboardHelpComponent {
  apiLabel: string;
  aboutLabel: string;
  helpLabel: string;

  constructor(
    private modalCdsService: ModalCdsService,
    @Inject(LOCALE_ID) localeId: string
  ) {
    const isZhHans = localeId.startsWith('zh');
    this.apiLabel = isZhHans ? 'API 文档' : 'API Documentation';
    this.aboutLabel = isZhHans ? '关于系统' : 'About System';
    this.helpLabel = isZhHans ? '系统帮助' : 'System Help';
  }

  openAboutModal() {
    this.modalCdsService.show(AboutComponent);
  }
}
