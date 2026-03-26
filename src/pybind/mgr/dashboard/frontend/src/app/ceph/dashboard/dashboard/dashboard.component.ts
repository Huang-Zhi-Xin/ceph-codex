import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureTogglesService } from '~/app/shared/services/feature-toggles.service';

@Component({
  selector: 'cd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  enabledFeature$: Observable<Object>;
  skipToContentLabel: string;

  constructor(private featureToggles: FeatureTogglesService, @Inject(LOCALE_ID) localeId: string) {
    this.enabledFeature$ = this.featureToggles.get();
    this.skipToContentLabel = localeId.startsWith('zh') ? '跳转到主要内容' : 'skip to content';
  }
}
