import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SettingsService} from './shell/settings/settings.service';
import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';

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
    registerLocaleData(localeEn, 'en');
    registerLocaleData(localeFr, 'fr');
  }

}
