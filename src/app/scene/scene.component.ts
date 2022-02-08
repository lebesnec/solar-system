import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {CELESTIAL_BODY_TYPE, CelestialBody, OrbitPoint, Point} from './scene.model';
import {select} from 'd3-selection';
import {curveCardinalClosed, line} from 'd3-shape';
import {zoom, zoomIdentity, ZoomTransform} from 'd3-zoom';
import {range} from 'd3-array';
import {randomNormal} from 'd3-random';
import {KM_TO_PX, SceneService, SOLAR_SYSTEM_SIZE} from './scene.service';
import {SOLAR_SYSTEM, SUN} from './data/SolarSystem.data';
import {SearchPanelService} from '../shell/search-panel/search-panel.service';
import {MERCURY} from './data/Mercury.data';
import {VENUS} from './data/Venus.data';
import {EARTH} from './data/Earth.data';
import {MARS} from './data/Mars.data';
import {JUPITER} from './data/Jupiter.data';
import {SATURN} from './data/Saturn.data';
import {URANUS} from './data/Uranus.data';
import {NEPTUNE} from './data/Neptune.data';
import {selectAll} from 'd3';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CelestialBodyDialogComponent} from './celestial-body-dialog/celestial-body-dialog.component';
import {ORBITS_SETTING, SettingsPanelService} from '../shell/settings-panel/settings-panel.service';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

const MILKY_WAY_RADIUS_X = window.innerWidth / 4; // px
const MILKY_WAY_RADIUS_Y = window.innerWidth / 25; // px
const MILKY_WAY_ANGLE = -10; // degrees
const NB_STARS = Math.min((window.innerWidth * window.innerHeight) / 500, 2000);
const STAR_MAX_RADIUS = 0.5; // px

const TOOLBAR_HEIGHT = 65;
const RETICULE_SIZE = 30; // px
const RETICULE_SPACING = 300; // px

const NB_POINTS_ORBIT = 180;
const MIN_BODY_RADIUS = 50; // km
const LABEL_SPACING = 15;
const LABEL_DISTANCE_TO_BODY: Point = { x: 20, y: 10 }; // px
const LABEL_TRANSITION_MS = 50; // ms
const LABEL_PATH_MARGIN = 4; // px
const ZOOM_TRANSITION_MS = 500; // ms

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit, AfterViewInit {

  public ORBITS_SETTING = ORBITS_SETTING;

  public get reticuleSetting(): boolean {
    return this.settingsService.reticule;
  }
  public get orbitsSetting(): ORBITS_SETTING {
    return this.settingsService.orbits;
  }
  public get labelsSetting(): boolean {
    return this.settingsService.labels;
  }
  public get milkyWaySetting(): boolean {
    return this.settingsService.milkyWay;
  }

  private svgSelection: any;
  private groupBackgroundSelection: any;
  private groupZoomSelection: any;
  private groupForegroundSelection: any;
  private d3Zoom: any;
  private labelsPath: any;
  private transform: ZoomTransform;
  private bodiesLabels = {};
  private celestialBodyDialogRef: MatDialogRef<{ body: CelestialBody }>;

  private get center(): Point {
    return {
      x: window.innerWidth / 2, // px
      y: window.innerHeight / 2 // px
    };
  }

  constructor(
    private translate: TranslateService,
    private dialog: MatDialog,
    private sceneService: SceneService,
    private searchPanelService: SearchPanelService,
    private settingsService: SettingsPanelService
  ) { }

  public ngOnInit(): void {
    this.searchPanelService.onBodySelected.subscribe((body) => {
      if (body) {
        this.select(body);
        this.zoomTo(body, true);
      } else {
        this.deselectAll();
        this.deZoom();
      }
    });

    fromEvent(window, 'resize').pipe(debounceTime(500)).subscribe(() => {
      this.onWindowResize();
    });
  }

  public ngAfterViewInit(): void {
    this.svgSelection = select('.scene').on('click', () => {
      this.deselectAll();
    });
    this.groupBackgroundSelection = this.svgSelection.append('g');
    this.groupZoomSelection = this.svgSelection.append('g');
    this.groupForegroundSelection = this.svgSelection.append('g');

    this.labelsPath = this.groupForegroundSelection.append('path')
                                                    .attr('class', 'label-path')
                                                    .style('opacity', 0);

    this.initMilkyWay();
    this.initReticule();
    this.initOrbits();
    this.initCelestialBodies();

    this.translate.get(SOLAR_SYSTEM.map(b => b.id)).subscribe((bodiesLabels) => {
      this.bodiesLabels = bodiesLabels;
      this.initZoom();
    });
  }

  private onWindowResize(): void {
    // redraw reticule and milky way when window size change because they are dependant from the window size
    this.groupBackgroundSelection.remove();
    this.groupBackgroundSelection = this.svgSelection.append('g');
    this.initMilkyWay();
    this.initReticule();
  }

  private initZoom(): void {
    this.d3Zoom = zoom().on('zoom', (e) => {
      this.transform = e.transform;

      this.groupZoomSelection.attr('transform', e.transform);
      this.initLabels();
    });
    this.svgSelection.call(this.d3Zoom);

    this.transform = zoomIdentity.translate(this.center.x, this.center.y)
                                 .scale(Math.min(this.center.x * 2, this.center.y * 2) / (SOLAR_SYSTEM_SIZE / KM_TO_PX));
    this.svgSelection.call(this.d3Zoom.transform, this.transform);
  }

  private initMilkyWay(): void {
    const randomNormalX = randomNormal(this.center.x, MILKY_WAY_RADIUS_X);
    const randomNormalY = randomNormal(this.center.y, MILKY_WAY_RADIUS_Y);
    const starsData = range(0, NB_STARS).map(i => {
      return {
        x: randomNormalX(),
        y: randomNormalY(),
        radius: Math.random() * STAR_MAX_RADIUS,
        opacity: Math.random()
      };
    });

    const groupMilkyWaySelection = this.groupBackgroundSelection.append('g')
                                                                .attr('class', 'milky-way')
                                                                .attr('transform', 'rotate(' + MILKY_WAY_ANGLE + ', ' + this.center.x + ', ' + this.center.y + ')');

    groupMilkyWaySelection.selectAll('.star')
                                .data(starsData)
                                .join(
                                  enter => enter.append('circle')
                                                .attr('class', 'star')
                                                .attr('r', (star) => star.radius)
                                                .attr('cx', (star) => star.x)
                                                .attr('cy', (star) => star.y)
                                                .style('opacity', (star) => star.opacity)
                                );
  }

  private initReticule(): void {
    const rangeX = range(0, window.innerWidth, RETICULE_SPACING);
    const rangeY = range(TOOLBAR_HEIGHT, window.innerHeight + TOOLBAR_HEIGHT, RETICULE_SPACING);

    const data: Point[] = [];
    rangeX.forEach((x) => {
      rangeY.forEach((y) => {
        data.push({ x, y });
      });
    });

    this.groupBackgroundSelection.selectAll('.reticuleV')
                                .data(data, (d) => 'reticuleV_' + d.x + '_' + d.y)
                                .join(
                                  enter => enter.append('path')
                                                  .attr('id', (d) => 'reticuleV_' + d.x + '_' + d.y)
                                                  .attr('class', 'reticuleV')
                                                  .attr('shape-rendering', 'crispEdges')
                                                  .attr('d', (d) => `M ${d.x} ${d.y - (RETICULE_SIZE / 2) - 1} L ${d.x} ${d.y + (RETICULE_SIZE / 2)}`),
                                  update => update.attr('x', (d) => d.x)
                                                  .attr('y', (d) => d.y)
                                );

    this.groupBackgroundSelection.selectAll('.reticuleH')
                                .data(data, (d) => 'reticuleH_' + d.x + '_' + d.y)
                                .join(
                                  enter => enter.append('path')
                                                .attr('id', (d) => 'reticuleH_' + d.x + '_' + d.y)
                                                .attr('class', 'reticuleH')
                                                .attr('shape-rendering', 'crispEdges')
                                                .attr('d', (d) => `M ${d.x - (RETICULE_SIZE / 2) - 1} ${d.y} L ${d.x + (RETICULE_SIZE / 2)} ${d.y}`),
                                  update => update.attr('x', (d) => d.x)
                                                  .attr('y', (d) => d.y)
                                );
  }

  private initCelestialBodies(): void {
    this.groupZoomSelection.selectAll('.celestial-body')
                                .data(SOLAR_SYSTEM, (d) => d.id)
                                .join(
                                  enter => enter.append('circle')
                                                .attr('id', (body) => body.id)
                                                .attr('class', (body) => 'celestial-body ' + body.type + ' ' + body.id)
                                                // nothing will show below a MIN_BODY_RADIUS radius :
                                                .attr('r', (body) => Math.max(body.radius, MIN_BODY_RADIUS) / KM_TO_PX)
                                                .attr('cx', (body) => body.position.x)
                                                .attr('cy', (body) => body.position.y)
                                                .on('click', (event, d) => {
                                                  this.select(d);
                                                  event.stopPropagation();
                                                })
                                );
  }

  private initOrbits(): void {
    const orbitsData = SOLAR_SYSTEM
                        .filter((body) => body.id !== 'sun')
                        .map((body) => {
                          return {
                            body,
                            path: this.sceneService.getOrbit(body, NB_POINTS_ORBIT)
                          };
                        });
    const lineFn = line<OrbitPoint>().curve(curveCardinalClosed.tension(1)).x(p => p.x).y(p => p.y);

    this.groupZoomSelection.selectAll('.orbit')
                               .data(orbitsData, (d) => d.body.id)
                               .join(
                                 enter => enter.append('path')
                                               .attr('id', (orbit) => 'orbit_' + orbit.body.id)
                                               .attr('class', (orbit) => 'orbit ' + orbit.body.type + ' ' + orbit.body.id)
                                               .attr('d', (orbit) => lineFn(orbit.path))
                               );
  }

  private initLabels(): void {
    const allLabelsData = SOLAR_SYSTEM.map(body => {
      return {
        body,
        boundingBox: (select('#' + body.id).node() as any).getBoundingClientRect(), // TODO store node ?
        visible: true
      };
    });
    // only show label of the biggest body if body are near each other:
    allLabelsData.forEach(data => {
      data.visible = allLabelsData.every(otherData => {
        if (otherData.visible && data.body !== otherData.body && data.body.radius < otherData.body.radius) {
          return !(data.boundingBox.left - LABEL_SPACING < otherData.boundingBox.right + LABEL_SPACING &&
                  data.boundingBox.right + LABEL_SPACING > otherData.boundingBox.left - LABEL_SPACING &&
                  data.boundingBox.top - LABEL_SPACING < otherData.boundingBox.bottom + LABEL_SPACING &&
                  data.boundingBox.bottom + LABEL_SPACING > otherData.boundingBox.top - LABEL_SPACING);
        } else {
          return true;
        }
      });
    });
    const labelsData = allLabelsData.filter(data => data.visible);

    this.labelsPath.style('opacity', 0);

    const labels = this.groupForegroundSelection.selectAll('.label')
                       .data(labelsData, (d) => d.body.id)
                       .join(
                        enter => enter.append('text')
                                      .attr('id', (d) => 'labeltext_' + d.body.id)
                                      .attr('class', (d) => 'label ' + d.body.type + ' ' + d.body.id)
                                      .text((d) => this.bodiesLabels[d.body.id])
                                      .attr('x', (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x)
                                      .attr('y', (d) => d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y)
                                      .on('mouseover', (event, d) => {
                                        const textBoundingBox = event.currentTarget.getBoundingClientRect();
                                        this.labelsPath.attr('d', `M ${d.boundingBox.x + (d.boundingBox.width / 2)} ${d.boundingBox.y + (d.boundingBox.height / 2)}
                                                                   L ${textBoundingBox.x - LABEL_PATH_MARGIN} ${textBoundingBox.bottom + LABEL_PATH_MARGIN}
                                                                   L ${textBoundingBox.x + textBoundingBox.width + LABEL_PATH_MARGIN} ${textBoundingBox.bottom + LABEL_PATH_MARGIN}`)
                                                    .transition()
                                                    .duration(LABEL_TRANSITION_MS)
                                                    .style('opacity', 1);
                                        select('#orbit_' + d.body.id).classed('hovered', true);
                                      })
                                      .on('mouseout', (event, d) => {
                                        this.labelsPath.transition()
                                                        .duration(LABEL_TRANSITION_MS)
                                                        .style('opacity', 0);
                                        select('#orbit_' + d.body.id).classed('hovered', false);
                                      })
                                      .on('mousedown', () => {
                                        this.labelsPath.style('opacity', 0);
                                      })
                                      .on('click', (event, d) => {
                                        this.select(d.body);
                                        this.zoomTo(d.body, false);
                                        event.stopPropagation();
                                      }),
                        update => update.attr('x', (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x)
                                        .attr('y', (d) =>  d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y)
                      );
  }

  private zoomTo(body: CelestialBody, forceZoom: boolean): void {
    const bodySelection = select('#' + body.id);

    const bbox = (bodySelection.node() as any).getBBox();
    let scale = this.getScale(body);
    // do not dezoom when cliking on a body, only when clicking on a search result :
    if (!forceZoom && scale < this.transform.k) {
      scale = this.transform.k;
    }
    const zoomTo = zoomIdentity.translate(
                                this.center.x + ((-bbox.x - bbox.width / 2) * scale),
                                this.center.y + ((-bbox.y - bbox.height / 2) * scale)
                              )
                              .scale(scale);

    this.svgSelection.transition()
                      .duration(ZOOM_TRANSITION_MS)
                      .call(this.d3Zoom.transform, zoomTo);
  }

  private deZoom(): void {
    const zoomTo = zoomIdentity.translate(this.center.x, this.center.y)
                               .scale(Math.min(this.center.x * 2, this.center.y * 2) / (SOLAR_SYSTEM_SIZE / KM_TO_PX));
    this.svgSelection.transition()
                      .duration(ZOOM_TRANSITION_MS)
                      .call(this.d3Zoom.transform, zoomTo);
  }

  private getScale(body: CelestialBody): number {
    switch (body) {
      case SUN:
        return 5.0;
      case MERCURY:
      case VENUS:
      case EARTH:
      case MARS:
        return 500.0;
      case JUPITER:
        return 1.3;
      case SATURN:
        return 1.5;
      case URANUS:
        return 2.0;
      case NEPTUNE:
        return 0.6;
      default:
        if (body.type === CELESTIAL_BODY_TYPE.DWARF_PLANET) {
          return 500.0;
        } else {
          return this.getScale(body.orbitBody);
        }
    }
  }

  private deselectAll(): void {
    selectAll('.selected').classed('selected', false);
  }

  private select(body: CelestialBody): void {
    this.deselectAll();
    select('#labeltext_' + body.id).classed('selected', true);
    select('#orbit_' + body.id).classed('selected', true);

    if (this.celestialBodyDialogRef) {
      this.celestialBodyDialogRef.componentInstance.body = body;
    } else {
      this.celestialBodyDialogRef = this.dialog.open(CelestialBodyDialogComponent, {
        width: '420px',
        maxHeight: '80vh',
        panelClass: 'celestial-body-dialog-panel',
        closeOnNavigation: true,
        autoFocus: false,
        position: {
          bottom: '50px',
          right: '50px'
        },
        hasBackdrop: false,
        data: {
          body
        }
      });
      this.celestialBodyDialogRef.afterClosed().subscribe(() => {
        this.celestialBodyDialogRef = null;
      });
    }
  }

}
