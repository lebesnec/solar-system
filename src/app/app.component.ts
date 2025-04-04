import { Component, inject } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SettingsService} from './shell/settings/settings.service';
import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';
import { ShellComponent } from './shell/shell.component';

export const AVAILABLE_LANGUAGES = [ 'en', 'fr' ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ShellComponent]
})
export class AppComponent {

  constructor() {
    const translateService = inject(TranslateService);
    const settingsService = inject(SettingsService);

    translateService.setDefaultLang('en');
    translateService.use(settingsService.language);
    registerLocaleData(localeEn, 'en');
    registerLocaleData(localeFr, 'fr');
  }

}
