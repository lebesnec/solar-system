import { Component, inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CelestialBodyType, CelestialBody, KG_TO_POUND, KM_TO_MILE} from '../scene.model';
import {HAS_SYMBOL, MISSING_PICTURES, SUN} from '../data/SolarSystem.data';
import {TranslateService} from '@ngx-translate/core';
import {SettingsService} from '../../shell/settings/settings.service';

@Component({
  selector: 'app-celestial-body-dialog',
  templateUrl: './celestial-body-dialog.component.html',
  styleUrls: ['./celestial-body-dialog.component.scss'],
  standalone: false
})
export class CelestialBodyDialogComponent {

  public body: CelestialBody;

  protected readonly SUN = SUN;
  protected readonly CelestialBodyType = CelestialBodyType;
  protected readonly MISSING_PICTURES = MISSING_PICTURES;
  protected readonly HAS_SYMBOL = HAS_SYMBOL;
  protected readonly KM_TO_MILE = KM_TO_MILE;
  protected readonly KG_TO_POUND = KG_TO_POUND;

  private translate = inject(TranslateService);
  private settings = inject(SettingsService);

  protected get lang(): string {
    return this.translate.currentLang;
  }

  protected get isMetric(): boolean {
    return this.settings.metric;
  }

  constructor() {
    const data = inject<{ body: CelestialBody }>(MAT_DIALOG_DATA);
    this.body = data.body;
  }

  protected getImagePath(body: CelestialBody, format: 'jpg' | 'avif'): string {
    let path = 'assets/celestial_bodies/';
    if (body.type === CelestialBodyType.PLANET || body.type === CelestialBodyType.DWARF_PLANET) {
      path += body.id + '/';
    } else if (body.type === CelestialBodyType.SATELLITE) {
      path += body.orbitBody.id + '/';
    }

    return path + body.id + '_small.' + format;
  }

}
