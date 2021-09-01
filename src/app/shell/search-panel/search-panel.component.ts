import {Component, Input} from '@angular/core';
import { DWARF_PLANETS } from 'src/app/scene/data/DwarfPlanets.data';
import {SOLAR_SYSTEM, SUN} from 'src/app/scene/data/SolarSystem.data';
import {CelestialBody} from '../../scene/scene.model';
import {SearchPanelService} from './search-panel.service';
import {GANYMEDE, JUPITER} from '../../scene/data/Jupiter.data';
import {MOON} from '../../scene/data/Earth.data';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {

  @Input() public search = '';

  public readonly SUN = SUN;
  public readonly DWARF_PLANETS = DWARF_PLANETS;
  public readonly JUPITER = JUPITER;
  public readonly MOON = MOON;
  public readonly GANYMEDE = GANYMEDE;

  constructor(
    private searchService: SearchPanelService
  ) { }

  public get searchResult(): CelestialBody[] {
    // TODO called to often
    return this.searchService.filter<CelestialBody>(SOLAR_SYSTEM, [ 'id' ], this.search);
  }

  public onBodySelected(body: CelestialBody): void {
    this.searchService.onBodySelected.next(body);
  }

}
