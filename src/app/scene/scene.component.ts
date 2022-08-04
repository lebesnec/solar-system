import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CELESTIAL_BODY_TYPE, CelestialBody, OrbitPoint, Point} from './scene.model';
import {select} from 'd3-selection';
import {curveCardinalClosed, line} from 'd3-shape';
import {zoom, zoomIdentity, ZoomTransform} from 'd3-zoom';
import {range} from 'd3-array';
import {AU_TO_KM, KM_TO_PX, SceneService, SOLAR_SYSTEM_SIZE} from './scene.service';
import {HAS_SYMBOL, SOLAR_SYSTEM, SUN} from './data/SolarSystem.data';
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
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CelestialBodyDialogComponent} from './celestial-body-dialog/celestial-body-dialog.component';
import {ORBITS_SETTING, SettingsService} from '../shell/settings/settings.service';
import {from, fromEvent, Observable} from 'rxjs';
import {throttleTime} from 'rxjs/operators';
import {formatNumber} from '@angular/common';

const TOOLBAR_HEIGHT = 65;

const RETICULE_SIZE = 30; // px
const RETICULE_SPACING = 300; // px

const ORBIT_SEMI_MAJOR_AXIS_ELLIPSE_THRESHOLD = 100000; // km
const NB_POINTS_ORBIT = 180;

const SYMBOL_SIZE = 18; // px
const LABEL_SPACING = 15;
const LABEL_DISTANCE_TO_BODY: Point = { x: 20, y: 10 }; // px
const LABEL_TRANSITION_MS = 50; // ms
const LABEL_PATH_MARGIN = 4; // px

const ZOOM_TRANSITION_MS = 500; // ms

// max: max value of the scale in AU, step: draw a tick every tickInterval (in AU)
const SCALE_POSSIBLE_VALUES = [
  { max: 500,    tickInterval: 10 },
  { max: 100,    tickInterval: 10 },
  { max: 50,     tickInterval: 10 },
  { max: 10,     tickInterval: 1 },
  { max: 5,      tickInterval: 1 },
  { max: 3,      tickInterval: 1 },
  { max: 2,      tickInterval: 1 },
  { max: 1,      tickInterval: 1 },
  { max: 0.5,    tickInterval: 0.1 },
  { max: 0.1,    tickInterval: 0.01 },
  { max: 0.01,   tickInterval: 0.001 },
  { max: 0.001,  tickInterval: 0.0001 },
  { max: 0.0001, tickInterval: 0.00001 }
];
const SCALE_LARGE_TICK_STEP = 5; // there is a large tick every SCALE_LARGE_TICK_STEP small tick
const SCALE_AVERAGE_SIZE = 200; // px
const SCALE_PADDING = 50; // px
const SCALE_TEXT_PADDING = 10; // px
const SCALE_HEIGHT_LARGE_TICK = 10; // px
const SCALE_HEIGHT_SMALL_TICK = 6; // px
const SCALE_TEXT_KEY = 'NB AU';
const SCALE_TITLE_KEY = 'NB_AU Astronomical Unit = NB_KM km';
const SCALE_TITLE_PLURAL_KEY = 'NB_AU Astronomical Units = NB_KM km';
const COMPASS_TITLE_KEY = 'First Point of Aries';
const COMPAS_WIDTH = 35; // px

const ZOOM_EXTENT: [ number, number ] = [ 0.00025, 200 ];

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit, AfterViewInit {

  public ORBITS_SETTING = ORBITS_SETTING;

  public get scaleSetting(): boolean {
    return this.settingsService.scale;
  }
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
    private settingsService: SettingsService,
    private translateService: TranslateService
  ) { }

  public ngOnInit(): void {
    this.searchPanelService.onBodySelected.subscribe((body) => {
      if (body) {
        this.zoomTo(body, true).subscribe({
          complete: () => this.select(body)
        });
      } else {
        this.deselectAll();
        this.deZoom();
      }
    });

    fromEvent(window, 'resize').pipe(throttleTime(500)).subscribe(() => {
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

    this.initReticule();
    this.initOrbits();
    this.initCelestialBodies();
    this.initZoom();

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.get(SOLAR_SYSTEM.map(b => b.id)).subscribe((bodiesLabels) => {
        this.groupForegroundSelection.selectAll('.group-label').remove();
        this.bodiesLabels = bodiesLabels;
        this.initLabels();
      });
      this.initScale();
    });
  }

  private onWindowResize(): void {
    // redraw reticule when window size change because they are dependant from the window size
    this.initReticule();
  }

  private initZoom(): void {
    this.d3Zoom = zoom().scaleExtent(ZOOM_EXTENT).on('zoom', (e) => {
      const isPan = (this.transform?.k === e.transform.k);
      this.transform = e.transform;

      this.groupZoomSelection.attr('transform', e.transform);

      this.initLabels();
      if (!isPan) {
        this.initScale();
      }
    });
    this.svgSelection.call(this.d3Zoom);

    this.transform = zoomIdentity.translate(this.center.x, this.center.y)
                                 .scale(Math.min(this.center.x * 2, this.center.y * 2) / (SOLAR_SYSTEM_SIZE / KM_TO_PX));
    this.svgSelection.call(this.d3Zoom.transform, this.transform);
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
                                                .attr('r', (body) => body.radius / KM_TO_PX)
                                                .attr('cx', (body) => body.position.x)
                                                .attr('cy', (body) => body.position.y)
                                                .attr('transform', (body) => this.getRotationForLongitudeOfAscendingNode(body))
                                                .on('click', (event, d) => {
                                                  this.select(d);
                                                  event.stopPropagation();
                                                })
                                );
  }

  private initOrbits(): void {
    // "big" orbits does not render well with ellipse, so we use a path instead.
    // On the contrary "small" orbit does not look good with path, so we use an
    // ellipse for everything with a semi major axis <= to ORBIT_SEMI_MAJOR_AXIS_ELLIPSE_THRESHOLD

    // Ellipse:
    const smallOrbitsData = SOLAR_SYSTEM
                            .filter((body) => body.id !== 'sun' && body.semiMajorAxis <= ORBIT_SEMI_MAJOR_AXIS_ELLIPSE_THRESHOLD)
                            .map((body) => ({
                                body,
                                orbit: this.sceneService.getOrbitEllipse(body)
                            }));

    this.groupZoomSelection.selectAll('.orbit-ellipse')
                               .data(smallOrbitsData, (d) => d.body.id)
                               .join(
                                  enter => enter.append('ellipse')
                                                .attr('id', (d) => 'orbit_' + d.body.id)
                                                .attr('class', (d) => 'orbit-ellipse orbit ' + d.body.type + ' ' + d.body.id)
                                                .attr('cx', (d) => d.orbit.cx)
                                                .attr('cy', (d) => d.orbit.cy)
                                                .attr('rx', (d) => d.orbit.rx)
                                                .attr('ry', (d) => d.orbit.ry)
                                                .attr('transform', (d) => this.getRotationForLongitudeOfAscendingNode(d.body))
                               );

    // Path:
    const lineFn = line<OrbitPoint>().curve(curveCardinalClosed.tension(1)).x(p => p.x).y(p => p.y);
    const largeOrbitsData = SOLAR_SYSTEM
                            .filter((body) => body.id !== 'sun' && body.semiMajorAxis > ORBIT_SEMI_MAJOR_AXIS_ELLIPSE_THRESHOLD)
                            .map((body) => ({
                              body,
                              orbit: lineFn(this.sceneService.getOrbitPath(body, NB_POINTS_ORBIT))
                            }));

    this.groupZoomSelection.selectAll('.orbit-path')
                            .data(largeOrbitsData, (d) => d.body.id)
                            .join(
                              enter => enter.append('path')
                                            .attr('id', (d) => 'orbit_' + d.body.id)
                                            .attr('class', (d) => 'orbit-path orbit ' + d.body.type + ' ' + d.body.id)
                                            .attr('d', (d) => d.orbit)
                                            .attr('transform', (d) => this.getRotationForLongitudeOfAscendingNode(d.body))
                            );
  }

  private getRotationForLongitudeOfAscendingNode(body: CelestialBody): string|null {
    if (body.longitudeOfAscendingNode && body.orbitBody) {
      // we negate the longitude of ascending node because the rotate function is clockwise:
      return `rotate(${-body.longitudeOfAscendingNode}, ${body.orbitBody.position.x}, ${body.orbitBody.position.y})`;
    } else if (body.orbitBody) {
      return this.getRotationForLongitudeOfAscendingNode(body.orbitBody);
    } else {
      return null;
    }
  }

  private initLabels(): void {
    const allLabelsData = SOLAR_SYSTEM.map(body => {
      return {
        body,
        boundingBox: (select('#' + body.id).node() as any).getBoundingClientRect(),
        visible: true,
        hasSymbol: HAS_SYMBOL.includes(body)
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

    // the path from the label to the body that show up when you hover a label:
    if (this.labelsPath) {
      this.labelsPath.remove();
    }
    this.labelsPath = this.groupForegroundSelection.append('path')
                                                   .attr('class', 'label-path')
                                                   .style('opacity', 0);

    // create an empty group for each label:
    const groupLabelsSelection = this.groupForegroundSelection
                                      .selectAll('.group-label')
                                      .data(labelsData, (d) => d.body.id)
                                      .join(
                                        enter => enter.append('g')
                                                      .attr('class', 'group-label')
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
                                                      })
                                    );

    // add the text in all the group:
    groupLabelsSelection.selectAll('.label')
                        .data(d => [ d ], (d) => d.body.id)
                        .join(
                          enter => enter.append('text')
                                        .attr('id', (d) => 'labeltext_' + d.body.id)
                                        .attr('class', (d) => 'label ' + d.body.type + ' ' + d.body.id)
                                        .attr('dominant-baseline', 'central')
                                        .text((d) => this.bodiesLabels[d.body.id])
                                        .attr('x', (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x + (d.hasSymbol ? 1.2 * SYMBOL_SIZE : 0))
                                        .attr('y', (d) => d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y),
                          update => update.attr('x', (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x + (d.hasSymbol ? 1.2 * SYMBOL_SIZE : 0))
                                          .attr('y', (d) =>  d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y)
                        );

    // add the image for the symbol in all the group which have a symbol:
    groupLabelsSelection.selectAll('.label-symbol')
                        .data(d => d.body !== SUN && d.hasSymbol ? [ d ] : [], (d) => d.body.id)
                        .join(
                          enter => enter.append('image')
                                        .attr('id', (d) => 'labelsymbol_' + d.body.id)
                                        .attr('class', (d) => 'label-symbol ' + d.body.type + ' ' + d.body.id)
                                        .attr('href', (d) => 'assets/symbols/' + d.body.id + '.svg')
                                        .attr('width', SYMBOL_SIZE)
                                        .attr('height', SYMBOL_SIZE)
                                        .attr('x', (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x)
                                        .attr('y', (d) => d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y - (SYMBOL_SIZE / 2)),
                          update => update.attr('x', (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x)
                                          .attr('y', (d) => d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y - (SYMBOL_SIZE / 2))
                        );
  }

  private initScale(): void {
    const scaleSizeAU = SCALE_AVERAGE_SIZE / ((AU_TO_KM / KM_TO_PX) * this.transform.k);
    // find the nearest available scale value:
    const scale = SCALE_POSSIBLE_VALUES.sort((a, b) => Math.abs(scaleSizeAU - a.max) - Math.abs(scaleSizeAU - b.max))[0];
    const scaleSizePx = ((scale.max * AU_TO_KM) / KM_TO_PX) * this.transform.k;
    const scaleSizeKm = Math.round(scale.max * AU_TO_KM);

    this.groupForegroundSelection.select('.scale').remove();
    const groupScaleSelection = this.groupForegroundSelection.append('g').attr('class', 'scale');

    // horizontal line
    groupScaleSelection.append('path')
                        .attr('shape-rendering', 'crispEdges')
                        .attr('d', `M ${SCALE_PADDING + COMPAS_WIDTH} ${window.innerHeight - SCALE_PADDING} L ${SCALE_PADDING + COMPAS_WIDTH + scaleSizePx} ${window.innerHeight - SCALE_PADDING}`);

    // ticks
    for (let i = 0; i < scale.max; i = i + scale.tickInterval) {
      const nbPx = ((i * AU_TO_KM) / KM_TO_PX) * this.transform.k;
      const height = (i % (SCALE_LARGE_TICK_STEP * scale.tickInterval) === 0 || i === scale.max ? SCALE_HEIGHT_LARGE_TICK : SCALE_HEIGHT_SMALL_TICK);
      groupScaleSelection.append('path')
                          .attr('shape-rendering', 'crispEdges')
                          .attr('d', `M ${SCALE_PADDING + COMPAS_WIDTH + nbPx} ${window.innerHeight - SCALE_PADDING - (height / 2)} L ${SCALE_PADDING + COMPAS_WIDTH + nbPx} ${window.innerHeight - SCALE_PADDING + (height / 2)}`);
    }
    // last tick (not included in the previous loop because of float rounding error)
    const nbPxLastTick = ((scale.max * AU_TO_KM) / KM_TO_PX) * this.transform.k;
    groupScaleSelection.append('path')
                        .attr('shape-rendering', 'crispEdges')
                        .attr('d', `M ${SCALE_PADDING + COMPAS_WIDTH + nbPxLastTick} ${window.innerHeight - SCALE_PADDING - (SCALE_HEIGHT_LARGE_TICK / 2)} L ${SCALE_PADDING + COMPAS_WIDTH + nbPxLastTick} ${window.innerHeight - SCALE_PADDING + (SCALE_HEIGHT_LARGE_TICK / 2)}`);

    const translationParams = {
      NB_AU: formatNumber(scale.max, this.translate.currentLang, '1.0-4'),
      NB_KM: formatNumber(scaleSizeKm, this.translate.currentLang, '1.0-4')
    };
    const translationsKeys = [
      SCALE_TEXT_KEY, SCALE_TITLE_KEY, SCALE_TITLE_PLURAL_KEY, COMPASS_TITLE_KEY
    ];
    this.translate.get(translationsKeys, translationParams).subscribe((translations) => {
      // text
      groupScaleSelection.append('text')
                            .text(translations[SCALE_TEXT_KEY])
                            .attr('dominant-baseline', 'central')
                            .attr('x', SCALE_PADDING + COMPAS_WIDTH + scaleSizePx + SCALE_TEXT_PADDING)
                            .attr('y', window.innerHeight - SCALE_PADDING)
                          .append('title')
                            .html(scale.max > 1 ? translations[SCALE_TITLE_PLURAL_KEY] : translations[SCALE_TITLE_KEY]);

      // compass
      this.groupForegroundSelection.select('.compass').remove();
      const groupCompassSelection = this.groupForegroundSelection.append('g').attr('class', 'compass');

      groupCompassSelection.append('text')
                              .html('🔼&#xFE0E;')
                              .attr('dominant-baseline', 'central')
                              .attr('x', SCALE_PADDING)
                              .attr('y', window.innerHeight - SCALE_PADDING - (SCALE_HEIGHT_LARGE_TICK / 2) - (SCALE_TEXT_PADDING / 4))
                              .attr('class', 'compass')
                            .append('title')
                              .html(translations[COMPASS_TITLE_KEY]);
      groupCompassSelection.append('text')
                              .html('♈&#xFE0E;')
                              .attr('dominant-baseline', 'central')
                              .attr('x', SCALE_PADDING)
                              .attr('y', window.innerHeight - SCALE_PADDING + (SCALE_HEIGHT_LARGE_TICK / 2) + (SCALE_TEXT_PADDING / 4))
                              .attr('class', 'compass')
                            .append('title')
                              .html(translations[COMPASS_TITLE_KEY]);
    });
  }

  private zoomTo(body: CelestialBody, forceZoom: boolean): Observable<unknown> {
    const bbox = this.getBoundingBox(body);
    let scale = this.getScale(body);
    // do not dezoom when clicking on a body, only when clicking on a search result :
    if (!forceZoom && scale < this.transform.k) {
      scale = this.transform.k;
    }
    const zoomTo = zoomIdentity.translate(
                                this.center.x + ((-bbox.x - bbox.width / 2) * scale),
                                this.center.y + ((-bbox.y - bbox.height / 2) * scale)
                              )
                              .scale(scale);

    const transition = this.svgSelection.transition()
                                        .duration(ZOOM_TRANSITION_MS)
                                        .call(this.d3Zoom.transform, zoomTo);
    return from(transition.end());
  }

  /**
   * getBBox() does not take into account rotation of the element, so we have to wrapp
   * the element into a group, get the bbox, and remove the group.
   */
  private getBoundingBox(body: CelestialBody): DOMRect {
    const element: any = select('#' + body.id).node();
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    element.parentNode.appendChild(group);
    group.appendChild(element);
    const bBox: SVGRect = group.getBBox();
    group.parentNode.appendChild(element);
    group.remove();
    // SVGRect to DOMRect:
    return new DOMRect(bBox.x, bBox.y, bBox.width, bBox.height);
  }

  private deZoom(): void {
    const zoomTo = zoomIdentity.translate(this.center.x, this.center.y)
                               .scale(Math.min(this.center.x * 2, this.center.y * 2) / (SOLAR_SYSTEM_SIZE / KM_TO_PX));
    this.svgSelection.transition()
                      .duration(ZOOM_TRANSITION_MS)
                      .call(this.d3Zoom.transform, zoomTo);
  }

  private getScale(body: CelestialBody): number {
    const max = ZOOM_EXTENT[1];
    switch (body) {
      case SUN:
        return 5.0;
      case MERCURY:
      case VENUS:
        return max;
      case EARTH:
        return 100;
      case MARS:
        return max;
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
          return max;
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
    select('#labelsymbol_' + body.id).classed('selected', true);
    select('#orbit_' + body.id).classed('selected', true);

    if (this.celestialBodyDialogRef) {
      this.celestialBodyDialogRef.componentInstance.body = body;
    } else {
      this.celestialBodyDialogRef = this.dialog.open(CelestialBodyDialogComponent, {
        width: '450px',
        maxHeight: '80vh',
        panelClass: 'celestial-body-dialog-panel',
        closeOnNavigation: true,
        autoFocus: false,
        position: {
          bottom: '50px',
          right: '50px'
        },
        hasBackdrop: false,
        data: { body }
      });
      this.celestialBodyDialogRef.afterClosed().subscribe(() => {
        this.celestialBodyDialogRef = null;
      });
    }
  }

}
