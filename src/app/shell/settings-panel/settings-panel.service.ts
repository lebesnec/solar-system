import { Injectable } from '@angular/core';
import {AVAILABLE_LANGUAGES} from '../../app.component';
import {Title} from '@angular/platform-browser';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

export enum ORBITS_SETTING {
  ALL = 'all',
  PLANET = 'planet',
  NONE = 'none'
}

@Injectable({
  providedIn: 'root'
})
export class SettingsPanelService {

  public get language(): string {
    const result = localStorage.getItem('language');
    return result ?? this.getDefaultLanguage();
  }
  public set language(value: string) {
    this.translateService.use(value);
    localStorage.setItem('language', value);
  }

  public get reticule(): boolean {
    return localStorage.getItem('reticule') !== 'false';
  }
  public set reticule(value: boolean) {
    localStorage.setItem('reticule', value ? 'true' : 'false');
  }

  public get orbits(): ORBITS_SETTING {
    const val = localStorage.getItem('orbits');
    return val ? val as ORBITS_SETTING : ORBITS_SETTING.ALL;
  }
  public set orbits(value: ORBITS_SETTING) {
    localStorage.setItem('orbits', value);
  }

  public get labels(): boolean {
    return localStorage.getItem('labels') !== 'false';
  }
  public set labels(value: boolean) {
    localStorage.setItem('labels', value ? 'true' : 'false');
  }

  public get milkyWay(): boolean {
    return localStorage.getItem('milkyWay') !== 'false';
  }
  public set milkyWay(value: boolean) {
    localStorage.setItem('milkyWay', value ? 'true' : 'false');
  }

  constructor(
    titleService: Title,
    private translateService: TranslateService
  ) {
    // Change page title when user changes language preference
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateService.get('APP_TITLE').subscribe((res: string) => {
        titleService.setTitle(res);
      });
    });
  }

  private getDefaultLanguage(): string {
    let language = 'en-US';
    if (navigator.languages && navigator.languages.length) {
      language = navigator.languages[0];
    } else if (navigator.language) {
      language = navigator.language;
    }

    const result = language.toLowerCase().substring(0, 2);
    if (AVAILABLE_LANGUAGES.includes(result)) {
      return result;
    } else {
      return 'en';
    }
  }

}
