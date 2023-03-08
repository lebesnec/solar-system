import {Component, Inject} from '@angular/core';
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA} from '@angular/material/legacy-dialog';
import {CelestialBodyType, CelestialBody, KG_TO_POUND, KM_TO_MILE} from '../scene.model';
import {HAS_SYMBOL, MISSING_PICTURES, SUN} from '../data/SolarSystem.data';
import {TranslateService} from '@ngx-translate/core';
import {SettingsService} from '../../shell/settings/settings.service';

@Component({
  selector: 'app-celestial-body-dialog',
  templateUrl: './celestial-body-dialog.component.html',
  styleUrls: ['./celestial-body-dialog.component.scss']
})
export class CelestialBodyDialogComponent {

  public body: CelestialBody;

  public readonly SUN = SUN;
  public readonly CelestialBodyType = CelestialBodyType;
  public readonly MISSING_PICTURES = MISSING_PICTURES;
  public readonly HAS_SYMBOL = HAS_SYMBOL;
  public readonly KM_TO_MILE = KM_TO_MILE;
  public readonly KG_TO_POUND = KG_TO_POUND;

  public get lang(): string {
    return this.translate.currentLang;
  }

  public get isMetric(): boolean {
    return this.settings.metric;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) data: { body: CelestialBody },
    private translate: TranslateService,
    private settings: SettingsService
  ) {
    this.body = data.body;
  }

  public getImagePath(body: CelestialBody, format: 'jpg' | 'avif'): string {
    let path = 'assets/celestial_bodies/';
    if (body.type === CelestialBodyType.PLANET || body.type === CelestialBodyType.DWARF_PLANET) {
      path += body.id + '/';
    } else if (body.type === CelestialBodyType.SATELLITE) {
      path += body.orbitBody.id + '/';
    }

    return path + body.id + '_small.' + format;
  }

}
