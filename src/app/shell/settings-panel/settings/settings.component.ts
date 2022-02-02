import { Component } from '@angular/core';
import {SettingsPanelService} from '../settings-panel.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  get gridOn(): boolean {
    return this.settingsService.gridOn;
  }
  set gridOn(value: boolean) {
    this.settingsService.gridOn = value;
  }

  get orbitsOn(): boolean {
    return this.settingsService.orbitsOn;
  }
  set orbitsOn(value: boolean) {
    this.settingsService.orbitsOn = value;
  }

  get labelsOn(): boolean {
    return this.settingsService.labelsOn;
  }
  set labelsOn(value: boolean) {
    this.settingsService.labelsOn = value;
  }

  constructor(
    private settingsService: SettingsPanelService
  ) { }

}
