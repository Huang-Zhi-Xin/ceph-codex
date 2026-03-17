import { Component, OnDestroy, OnInit } from '@angular/core';

import { NotificationType } from '~/app/shared/enum/notification-type.enum';
import { NotificationService } from '~/app/shared/services/notification.service';
import { TelemetryNotificationService } from '~/app/shared/services/telemetry-notification.service';

@Component({
  selector: 'cd-telemetry-notification',
  templateUrl: './telemetry-notification.component.html',
  styleUrls: ['./telemetry-notification.component.scss']
})
export class TelemetryNotificationComponent implements OnInit, OnDestroy {
  displayNotification = false;
  notificationSeverity = 'warning';

  constructor(
    private notificationService: NotificationService,
    private telemetryNotificationService: TelemetryNotificationService
  ) {}

  ngOnInit() {
    this.telemetryNotificationService.update.subscribe((visible: boolean) => {
      this.displayNotification = false && visible;
    });
  }

  ngOnDestroy() {
    this.telemetryNotificationService.setVisibility(false);
  }

  isNotificationHidden(): boolean {
    return localStorage.getItem('telemetry_notification_hidden') === 'true';
  }

  onDismissed(): void {
    this.telemetryNotificationService.setVisibility(false);
    localStorage.setItem('telemetry_notification_hidden', 'true');
    this.notificationService.show(
      NotificationType.success,
      $localize`Telemetry activation reminder muted`,
      $localize`You can enable telemetry reporting from <b>System Settings</b> \
-> <b>Telemetry Settings</b> at any time.`
    );
  }
}
