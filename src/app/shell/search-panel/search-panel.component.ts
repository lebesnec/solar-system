import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { DWARF_PLANETS } from 'src/app/scene/data/DwarfPlanets.data';
import {HAS_SYMBOL, INNER_PLANETS, OUTER_PLANETS, SOLAR_SYSTEM, SUN} from 'src/app/scene/data/SolarSystem.data';
import {CelestialBody, LAGRANGE_POINT_I18N_KEY, LAGRANGE_POINT_TYPES, LagrangePointType} from '../../scene/scene.model';
import {SearchPanelService} from './search-panel.service';
import {GANYMEDE, JUPITER} from '../../scene/data/Jupiter.data';
import {MOON} from '../../scene/data/Earth.data';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MatDivider } from '@angular/material/divider';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription } from '@angular/material/expansion';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { I18nPluralPipe } from '@angular/common';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
  imports: [
    MatDivider,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatGridList,
    MatGridTile,
    RouterLink,
    MatExpansionPanelDescription,
    I18nPluralPipe,
    TranslateModule,
  ],
})
export class SearchPanelComponent implements OnInit, OnChanges {

  @Input() public search = '';

  protected searchResult: CelestialBody[] | null = null;
  protected searchResultLagrangePoints: LagrangePointType[] | null = null;

  protected get nbCol(): number {
    return window.innerWidth <= 600 ? 2 : 4;
  }

  protected readonly SUN = SUN;
  protected readonly INNER_PLANETS = INNER_PLANETS;
  protected readonly OUTER_PLANETS = OUTER_PLANETS;
  protected readonly DWARF_PLANETS = DWARF_PLANETS;
  protected readonly JUPITER = JUPITER;
  protected readonly MOON = MOON;
  protected readonly GANYMEDE = GANYMEDE;
  protected readonly LAGRANGE_POINT_TYPES = LAGRANGE_POINT_TYPES;
  protected readonly HAS_SYMBOL = HAS_SYMBOL;
  protected readonly NB_DWARF_PLANETS_SATELLITES = DWARF_PLANETS.reduce((nb, p) => nb + p.satellites.length, 0);

  private searchChanged: Subject<void> = new Subject<void>();

  private searchService = inject(SearchPanelService);
  private translate = inject(TranslateService);

  public ngOnInit(): void {
    this.searchChanged.pipe(debounceTime(300)).subscribe(() => {
      if (this.search === '') {
        this.searchResult = null;
      } else {
        this.onSearchChange();
      }
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.search) {
      this.searchChanged.next();
    }
  }

  protected onBodySelected(body: CelestialBody): void {
    this.searchService.onBodySelected.next(body);
  }

  protected onLagrangePointSelected(type: LagrangePointType): void {
    this.searchService.onLagrangePointSelected.next(type);
  }

  private onSearchChange(): void {
    this.translate.get(SOLAR_SYSTEM.map(b => b.id)).subscribe(translations => {
      const data = SOLAR_SYSTEM.map(body => ({ body, translation: translations[body.id] }));
      this.searchResult = this.searchService.filter(data, [ 'translation' ], this.search).map(r => r.body);
    });

    this.translate.get(LAGRANGE_POINT_TYPES.map(t => LAGRANGE_POINT_I18N_KEY + t)).subscribe(translations => {
      const data = LAGRANGE_POINT_TYPES.map(t => ({ type: t, translation: translations[LAGRANGE_POINT_I18N_KEY + t] }));
      this.searchResultLagrangePoints = this.searchService.filter(data, [ 'translation' ], this.search).map(r => r.type);
    });
  }

}
