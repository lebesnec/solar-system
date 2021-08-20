import { Component } from '@angular/core';
import { DWARF_PLANETS } from 'src/app/scene/data/DwarfPlanets.data';
import { SUN } from 'src/app/scene/data/SolarSystem.data';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {

  public readonly SUN = SUN;
  public readonly DWARF_PLANETS = DWARF_PLANETS;

  constructor() { }

}
