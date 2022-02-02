import { Component } from '@angular/core';
import {SettingsService} from '../settings.service';

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

  get orbitOn(): boolean {
    return this.settingsService.orbitOn;
  }
  set orbitOn(value: boolean) {
    this.settingsService.orbitOn = value;
  }

  constructor(
    private settingsService: SettingsService
  ) { }

}
