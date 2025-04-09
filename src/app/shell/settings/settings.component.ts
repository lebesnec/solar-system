import { Component, inject } from '@angular/core';
import {OrbitsSetting, SettingsService} from './settings.service';
import {AVAILABLE_LANGUAGES} from '../../app.component';
import { MatDialogTitle, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [
    MatDialogTitle,
    CdkDrag,
    CdkDragHandle,
    MatIconButton,
    MatDialogClose,
    MatIcon,
    CdkScrollable,
    MatDialogContent,
    MatButtonToggleGroup,
    MatButtonToggle,
    TranslateModule,
  ],
})
export class SettingsComponent {

  protected AVAILABLE_LANGUAGES = AVAILABLE_LANGUAGES;
  protected OrbitsSetting = OrbitsSetting;

  protected get language(): string {
    return this.settingsService.language;
  }
  protected set language(value: string) {
    this.settingsService.language = value;
  }

  protected get metric(): boolean {
    return this.settingsService.metric;
  }
  protected set metric(value: boolean) {
    this.settingsService.metric = value;
  }

  protected get reticule(): boolean {
    return this.settingsService.reticule;
  }
  protected set reticule(value: boolean) {
    this.settingsService.reticule = value;
  }

  protected get orbits(): OrbitsSetting {
    return this.settingsService.orbits;
  }
  protected set orbits(value: OrbitsSetting) {
    this.settingsService.orbits = value;
  }

  protected get labels(): boolean {
    return this.settingsService.labels;
  }
  protected set labels(value: boolean) {
    this.settingsService.labels = value;
  }

  protected get milkyWay(): boolean {
    return this.settingsService.milkyWay;
  }
  protected set milkyWay(value: boolean) {
    this.settingsService.milkyWay = value;
  }

  protected get scale(): boolean {
    return this.settingsService.scale;
  }
  protected set scale(value: boolean) {
    this.settingsService.scale = value;
  }

  private settingsService = inject(SettingsService);

}
