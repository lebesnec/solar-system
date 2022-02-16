import { Component } from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';

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
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');

    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      // Change page title when user changes language preference
      translateService.get('APP_TITLE').subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
  }

}
