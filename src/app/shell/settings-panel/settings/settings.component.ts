import { Component } from '@angular/core';
import {ORBITS_SETTING, SettingsPanelService} from '../settings-panel.service';
import {AVAILABLE_LANGUAGES} from '../../../app.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  public AVAILABLE_LANGUAGES = AVAILABLE_LANGUAGES;
  public ORBITS_SETTING = ORBITS_SETTING;

  public get language(): string {
    return this.translateService.currentLang;
  }
  public set language(value: string) {
    this.translateService.use(value);
  }

  public get reticule(): boolean {
    return this.settingsService.reticule;
  }
  public set reticule(value: boolean) {
    this.settingsService.reticule = value;
  }

  public get orbits(): ORBITS_SETTING {
    return this.settingsService.orbits;
  }
  public set orbits(value: ORBITS_SETTING) {
    this.settingsService.orbits = value;
  }

  public get labels(): boolean {
    return this.settingsService.labels;
  }
  public set labels(value: boolean) {
    this.settingsService.labels = value;
  }

  public get milkyWay(): boolean {
    return this.settingsService.milkyWay;
  }
  public set milkyWay(value: boolean) {
    this.settingsService.milkyWay = value;
  }

  constructor(
    private settingsService: SettingsPanelService,
    private translateService: TranslateService
  ) { }

}
