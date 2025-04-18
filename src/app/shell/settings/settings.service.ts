import { Injectable, inject } from '@angular/core';
import {AVAILABLE_LANGUAGES} from '../../app.component';
import {Meta, Title} from '@angular/platform-browser';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';

export enum OrbitsSetting {
  ALL = 'all',
  PLANET = 'planet',
  NONE = 'none'
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private translateService = inject(TranslateService);

  public get language(): string {
    const result = localStorage.getItem('language');
    return result ?? this.getDefaultLanguage();
  }
  public set language(value: string) {
    this.translateService.use(value);
    localStorage.setItem('language', value);
  }

  public get metric(): boolean {
    return localStorage.getItem('metric') !== 'false';
  }
  public set metric(value: boolean) {
    localStorage.setItem('metric', value ? 'true' : 'false');
  }

  public get reticule(): boolean {
    return localStorage.getItem('reticule') !== 'false';
  }
  public set reticule(value: boolean) {
    localStorage.setItem('reticule', value ? 'true' : 'false');
  }

  public get orbits(): OrbitsSetting {
    const val = localStorage.getItem('orbits');
    return val ? val as OrbitsSetting : OrbitsSetting.ALL;
  }
  public set orbits(value: OrbitsSetting) {
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

  public get scale(): boolean {
    return localStorage.getItem('scale') !== 'false';
  }
  public set scale(value: boolean) {
    localStorage.setItem('scale', value ? 'true' : 'false');
  }

  constructor() {
    const titleService = inject(Title);
    const metaService = inject(Meta);
    const doc = inject<Document>(DOCUMENT);

    // Change page title/description/manifest when user changes language preference:
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateService.get('APP_TITLE').subscribe((res: string) => {
        titleService.setTitle(res);
      });
      this.translateService.get('APP_DESCRIPTION').subscribe((res: string) => {
        metaService.addTag({ name: 'description', content: res }, true);
      });
      const link: HTMLLinkElement = doc.createElement('link');
      link.setAttribute('rel', 'manifest');
      link.setAttribute('href', event.lang + '.manifest.json');
      doc.head.appendChild(link);
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
