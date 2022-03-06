import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SettingsService} from './shell/settings-panel/settings/settings.service';

export const AVAILABLE_LANGUAGES = [ 'en', 'fr' ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    translateService: TranslateService,
    settingsService: SettingsService
  ) {
    translateService.setDefaultLang('en');
    translateService.use(settingsService.language);
  }

}
