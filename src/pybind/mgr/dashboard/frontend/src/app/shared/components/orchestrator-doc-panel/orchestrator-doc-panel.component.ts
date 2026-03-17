import { Component, Inject, Input, LOCALE_ID } from '@angular/core';

import { OrchestratorFeature } from '~/app/shared/models/orchestrator.enum';

@Component({
  selector: 'cd-orchestrator-doc-panel',
  templateUrl: './orchestrator-doc-panel.component.html',
  styleUrls: ['./orchestrator-doc-panel.component.scss']
})
export class OrchestratorDocPanelComponent {
  @Input()
  missingFeatures: OrchestratorFeature[];
  missingFeaturesLabel: string;
  unavailableLabel: string;

  constructor(@Inject(LOCALE_ID) localeId: string) {
    const isZhHans = localeId.startsWith('zh');
    this.missingFeaturesLabel = isZhHans
      ? '当前管理编排器不支持此功能。'
      : 'The feature is not supported by the current management orchestrator.';
    this.unavailableLabel = isZhHans
      ? '管理编排器不可用。请参考相关文档以完成配置并启用该功能。'
      : 'The management orchestrator is not available. Please consult the documentation on how to configure and enable the functionality.';
  }
}
