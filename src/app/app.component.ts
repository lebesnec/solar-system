import { Component } from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';

export const AVAILABLE_LANGUAGES = [ 'en', 'fr' ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    titleService: Title,
    translateService: TranslateService
  ) {
    translateService.setDefaultLang('en');
    translateService.use(this.getUserLanguage());

    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      // Change page title when user changes language preference
      translateService.get('APP_TITLE').subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
  }

  private getUserLanguage(): string {
    let language = 'en-US';
    if (navigator.languages && navigator.languages.length) {
      language = navigator.languages[0];
    } else if (navigator.language) {
      language = navigator.language;
    }

    const result = language.toLowerCase().substr(0, 2);
    if (AVAILABLE_LANGUAGES.includes(result)) {
      return result;
    } else {
      return 'en';
    }
  }

}
