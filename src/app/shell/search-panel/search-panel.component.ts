import {Component, Input} from '@angular/core';
import { DWARF_PLANETS } from 'src/app/scene/data/DwarfPlanets.data';
import {SOLAR_SYSTEM, SUN} from 'src/app/scene/data/SolarSystem.data';
import {CelestialBody} from '../../scene/scene.model';
import {SearchPanelService} from './search-panel.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {

  @Input() public search = '';

  public readonly SUN = SUN;
  public readonly DWARF_PLANETS = DWARF_PLANETS;

  constructor(
    private searchService: SearchPanelService
  ) { }

  public get searchResult(): CelestialBody[] {
    // TODO called to often + empty result
    return this.searchService.filter<CelestialBody>(SOLAR_SYSTEM, [ 'id' ], this.search);
  }

  public onBodySelected(body: CelestialBody): void {
    this.searchService.onBodySelected.next(body);
  }

}
