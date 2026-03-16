import { Component } from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { ModalCdsService } from '~/app/shared/services/modal-cds.service';

@Component({
  selector: 'cd-dashboard-help',
  templateUrl: './dashboard-help.component.html',
  styleUrls: ['./dashboard-help.component.scss']
})
export class DashboardHelpComponent {
  constructor(private modalCdsService: ModalCdsService) {}

  openAboutModal() {
    this.modalCdsService.show(AboutComponent);
  }
}
