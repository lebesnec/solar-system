import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SettingsPanelService} from './shell/settings-panel/settings-panel.service';

export const AVAILABLE_LANGUAGES = [ 'en', 'fr' ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    translateService: TranslateService,
    settingsPanelService: SettingsPanelService
  ) {
    translateService.setDefaultLang('en');
    translateService.use(settingsPanelService.language);
  }

}
