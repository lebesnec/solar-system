import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import {
  AU_TO_KM,
  Ring,
  CelestialBodyType,
  CelestialBody,
  OrbitPoint,
  Point,
  LAGRANGE_POINT_I18N_KEY,
  RING_I18N_KEY,
  COMPASS_TITLE_I18N_KEY, LAGRANGE_POINT_TYPES, LagrangePointType
} from './scene.model';
import {select} from 'd3-selection';
import {curveCardinalClosed, line} from 'd3-shape';
import {zoom, zoomIdentity, ZoomTransform} from 'd3-zoom';
import {range} from 'd3-array';
import {SceneService, SOLAR_SYSTEM_SIZE} from './scene.service';
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
import {TranslateService} from '@ngx-translate/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CelestialBodyDialogComponent} from './celestial-body-dialog/celestial-body-dialog.component';
import {OrbitsSetting, SettingsService} from '../shell/settings/settings.service';
import {from, fromEvent, Observable} from 'rxjs';
import {throttleTime} from 'rxjs/operators';
import { formatNumber, NgClass } from '@angular/common';
import {ActivatedRoute} from '@angular/router';

const TOOLBAR_HEIGHT = 65;

const RETICULE_SIZE = 30; // px
const RETICULE_SPACING = 300; // px

const ORBIT_SEMI_MAJOR_AXIS_ELLIPSE_THRESHOLD = 100000; // km
const NB_POINTS_ORBIT = 180;

const LAGRANGE_POINTS_WIDTH = 6; // px

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
const SCALE_TEXT_PADDING = 10; // px
const SCALE_HEIGHT_LARGE_TICK = 10; // px
const SCALE_HEIGHT_SMALL_TICK = 6; // px
const SCALE_TEXT_KEY = 'NB AU';
const SCALE_TITLE_KEY = 'NB_AU Astronomical Unit = NB_KM km';
const SCALE_TITLE_PLURAL_KEY = 'NB_AU Astronomical Units = NB_KM km';

const COMPAS_WIDTH = 35; // px

const ZOOM_EXTENT: [ number, number ] = [ 0.00025, 200 ];

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
  imports: [NgClass]
})
export class SceneComponent implements OnInit, AfterViewInit {

  protected OrbitsSetting = OrbitsSetting;

  protected get scaleSetting(): boolean {
    return this.settingsService.scale;
  }
  protected get reticuleSetting(): boolean {
    return this.settingsService.reticule;
  }
  protected get orbitsSetting(): OrbitsSetting {
    return this.settingsService.orbits;
  }
  protected get labelsSetting(): boolean {
    return this.settingsService.labels;
  }
  protected get milkyWaySetting(): boolean {
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
  private celestialBodyDialogRef: MatDialogRef<{ body: CelestialBody }, void>;

  /**
   * SVG does not work well with big number, so we have to divide each value
   * (in km) by this ratio before drawing (in px). SVG also doesn't have much
   * decimal precision, so we can't have a ratio too big, or small bodies won't
   * render properly. This does NOT take into account the scale applied by the
   * current zoom!
   * See https://oreillymedia.github.io/Using_SVG/extras/ch08-precision.html
   */
  private scale = 1e5;

  private get center(): Point {
    return {
      x: window.innerWidth / 2, // px
      y: window.innerHeight / 2 // px
    };
  }

  private dialog = inject(MatDialog);
  private sceneService = inject(SceneService);
  private searchPanelService = inject(SearchPanelService);
  private settingsService = inject(SettingsService);
  private translateService = inject(TranslateService);
  private route = inject(ActivatedRoute);

  constructor() {
    // prevents pinch to zoom with a trackpad on desktop
    // https://stackoverflow.com/questions/68808218/how-to-capture-pinch-zoom-gestures-from-the-trackpad-in-a-desktop-browser-and-p
    window.addEventListener('wheel', e => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    }, { passive: false });
   }

  public ngOnInit(): void {
    this.searchPanelService.onBodySelected.subscribe(body => {
      if (body) {
        this.zoomToCelestialBody(body, true).subscribe({
          complete: () => this.select(body)
        });
      } else {
        this.deselectAll();
        this.deZoom();
      }
    });
    this.searchPanelService.onLagrangePointSelected.subscribe(type => this.zoomToLagrangePoint(type));

    fromEvent(window, 'resize')
      .pipe(throttleTime(300, undefined, { trailing: true }))
      .subscribe(() => this.onWindowResize());
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

    this.translateService.onLangChange.subscribe(() => this.onLangChange());
    this.onLangChange();

    this.route.queryParams.subscribe(params => {
      if (params.goto) {
        this.handleParamId(params.goto);
      }
    });
  }

  private onLangChange(): void {
    this.translateService.get(SOLAR_SYSTEM.map(b => b.id)).subscribe((bodiesLabels) => {
      this.groupForegroundSelection.selectAll('.group-label').remove();
      this.bodiesLabels = bodiesLabels;
      this.initLabels();
    });

    this.initScale();
    this.initRings();
    this.initLagrangePoints();
  }

  private handleParamId(id: string): void {
    const body = SOLAR_SYSTEM.find(b => b.id === id);

    if (body) {
      this.zoomToCelestialBody(body, true).subscribe({
        complete: () => this.select(body)
      });
    } else {
      const lagrangePointType = LAGRANGE_POINT_TYPES.find(t => t === id);
      if (lagrangePointType) {
        this.translateService.get(LAGRANGE_POINT_I18N_KEY + lagrangePointType).subscribe(() => {
          this.zoomToLagrangePoint(lagrangePointType);
        });
      }
    }
  }

  private onWindowResize(): void {
    // redraw reticule & scale when window size change because they are dependant from the window size
    this.initReticule();
    this.initScale();
  }

  private initZoom(): void {
    this.d3Zoom = zoom().scaleExtent(ZOOM_EXTENT).on('zoom', (e) => {
      const isPan = (this.transform?.k === e.transform.k);
      this.transform = e.transform;

      this.groupZoomSelection.attr('transform', e.transform);

      this.initLabels();
      if (!isPan) {
        this.initScale();
        this.initLagrangePoints();
      }
    });
    this.svgSelection.call(this.d3Zoom);

    this.transform = zoomIdentity.translate(this.center.x, this.center.y)
                                 .scale(Math.min(this.center.x * 2, this.center.y * 2) / (SOLAR_SYSTEM_SIZE / this.scale));
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
                            .data(SOLAR_SYSTEM, d => d.id)
                            .join(
                              enter => enter.append('circle')
                                            .attr('class', body => 'celestial-body ' + body.type + ' ' + body.id)
                                            .attr('r', body => body.radius / this.scale)
                                            .attr('cx', body => body.position.x / this.scale)
                                            .attr('cy', body => body.position.y / this.scale)
                                            .attr('transform', body => this.getRotationForLongitudeOfAscendingNode(body))
                                            .on('click', (event, d) => {
                                              this.select(d);
                                              event.stopPropagation();
                                            })
                            );
  }

  private initRings(): void {
    const ringsData = SOLAR_SYSTEM.reduce<{ ring: Ring, body: CelestialBody }[]>((result, body) => {
      const rings = body.rings ?? [];
      return result.concat(rings.map(ring => ({ ring, body })));
    }, []);

    this.translateService.get(ringsData.map(d => d.ring.id + RING_I18N_KEY)).subscribe(translations => {
      this.groupZoomSelection.selectAll('.ring').remove();
      this.groupZoomSelection.selectAll('.ring')
                              .data(ringsData, d => d.ring.id)
                              .join(
                                enter => enter.append('path')
                                                .attr('class', d => 'ring ' + d.ring.id)
                                                .attr('d', d => this.getRingPath(d))
                                                .attr('transform', d => this.getRotationForLongitudeOfAscendingNode(d.body))
                                              .append('title')
                                                .html(d => translations[d.ring.id + RING_I18N_KEY])
                              );
    });
  }

  private getRingPath(data: { body: CelestialBody, ring: Ring }): string {
    const position = {
      x: data.body.position.x / this.scale,
      y: data.body.position.y / this.scale
    };
    let outerRadius = (data.ring.radius + data.ring.width);
    let innerRadius = data.ring.radius;

    // avoid overlapping rings:
    const overlappingRings = data.body.rings.filter(r => (r.id !== data.ring.id) && (innerRadius >= r.radius) && (innerRadius < (r.radius + r.width)) && (outerRadius > (r.radius + r.width)))
                                            .sort((r1, r2) => r1.radius - r2.radius);
    if (overlappingRings.length > 0) {
      innerRadius = (overlappingRings[0].radius + overlappingRings[0].width);
    }

    innerRadius = innerRadius / this.scale;
    outerRadius = outerRadius / this.scale;

    // https://stackoverflow.com/a/42425397/990193
    return `M ${position.x} ${position.y - outerRadius}
            A ${outerRadius} ${outerRadius} 0 1 0 ${position.x} ${position.y + outerRadius}
            A ${outerRadius} ${outerRadius} 0 1 0 ${position.x} ${position.y - outerRadius}
            Z
            M ${position.x} ${position.y - innerRadius}
            A ${innerRadius} ${innerRadius} 0 1 1 ${position.x} ${position.y + innerRadius}
            A ${innerRadius} ${innerRadius} 0 1 1 ${position.x} ${position.y - innerRadius}
            Z`;
  }

  private initLagrangePoints(): void {
    const lagrangePoints = this.sceneService.getEarthLagrangePoints(this.scale);

    this.translateService.get(lagrangePoints.map(p => LAGRANGE_POINT_I18N_KEY + p.type)).subscribe(translations => {
      this.groupZoomSelection.selectAll('.lagrange-point').remove();
      this.groupZoomSelection.selectAll('.lagrange-point')
                              .data(lagrangePoints, d => d.type)
                              .join(
                                enter => {
                                  const g = enter.append('g').attr('class', p => 'lagrange-point lagrange-point-' + p.type);
                                  const halfWidth = LAGRANGE_POINTS_WIDTH / (2 * this.transform.k);
                                  g.append('path')
                                    .attr('d', p => `M ${p.x - halfWidth} ${p.y - halfWidth} L ${p.x + halfWidth} ${p.y + halfWidth}`);
                                  g.append('path')
                                    .attr('d', p => `M ${p.x - halfWidth} ${p.y + halfWidth} L ${p.x + halfWidth} ${p.y - halfWidth}`);
                                  g.append('title').html(p => translations[LAGRANGE_POINT_I18N_KEY + p.type]);
                                }
                              );
    });
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
                                orbit: this.sceneService.getOrbitEllipse(body, this.scale)
                            }));

    this.groupZoomSelection.selectAll('.orbit-ellipse')
                           .data(smallOrbitsData, (d) => d.body.id)
                           .join(
                              enter => enter.append('ellipse')
                                            .attr('class', (d) => 'orbit-ellipse orbit orbit-' + d.body.type + ' orbit-' + d.body.id)
                                            .attr('cx', (d) => d.orbit.cx)
                                            .attr('cy', (d) => d.orbit.cy)
                                            .attr('rx', (d) => d.orbit.rx)
                                            .attr('ry', (d) => d.orbit.ry)
                                            .attr('transform', (d) => this.getRotationForLongitudeOfAscendingNode(d.body))
                           );

    // Path:
    const lineFn = line<OrbitPoint>(p => p.x, p => p.y).curve(curveCardinalClosed.tension(1));
    const largeOrbitsData = SOLAR_SYSTEM
                            .filter((body) => body.id !== 'sun' && body.semiMajorAxis > ORBIT_SEMI_MAJOR_AXIS_ELLIPSE_THRESHOLD)
                            .map((body) => ({
                              body,
                              orbit: lineFn(this.sceneService.getOrbitPath(body, NB_POINTS_ORBIT, this.scale))
                            }));

    this.groupZoomSelection.selectAll('.orbit-path')
                            .data(largeOrbitsData, (d) => d.body.id)
                            .join(
                              enter => enter.append('path')
                                            .attr('class', (d) => 'orbit-path orbit orbit-' + d.body.type + ' orbit-' + d.body.id)
                                            .attr('d', (d) => d.orbit)
                                            .attr('transform', (d) => this.getRotationForLongitudeOfAscendingNode(d.body))
                            );
  }

  private getRotationForLongitudeOfAscendingNode(body: CelestialBody): string|null {
    if (body.longitudeOfAscendingNode && body.orbitBody) {
      // we negate the longitude of ascending node because the rotate function is clockwise:
      return `rotate(${-body.longitudeOfAscendingNode}, ${body.orbitBody.position.x / this.scale}, ${body.orbitBody.position.y / this.scale})`;
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
        boundingBox: (select('.' + body.id).node() as any).getBoundingClientRect(),
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
                                                        select('.orbit-' + d.body.id).classed('hovered', true);
                                                      })
                                                      .on('mouseout', (event, d) => {
                                                        this.labelsPath.transition()
                                                                        .duration(LABEL_TRANSITION_MS)
                                                                        .style('opacity', 0);
                                                        select('.orbit-' + d.body.id).classed('hovered', false);
                                                      })
                                                      .on('mousedown', () => {
                                                        this.labelsPath.style('opacity', 0);
                                                      })
                                                      .on('click', (event, d) => {
                                                        this.select(d.body);
                                                        this.zoomToCelestialBody(d.body, false);
                                                        event.stopPropagation();
                                                      })
                                    );

    // add the text in all the group:
    groupLabelsSelection.selectAll('.label')
                        .data(d => [ d ], (d) => d.body.id)
                        .join(
                          enter => enter.append('text')
                                        .attr('class', (d) => 'label label-' + d.body.type + ' label-' + d.body.id)
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
                                        .attr('class', (d) => 'label-symbol label-symbol-' + d.body.type + ' label-symbol-' + d.body.id)
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
    const paddingX = window.innerWidth <= 400 ? 20 : 50; // px
    const paddingY = window.innerWidth <= 400 ? 40 : 50; // px
    const averageScaleWidth = Math.min(200, window.innerWidth - paddingX - COMPAS_WIDTH - 200); // px

    const scaleSizeAU = averageScaleWidth / ((AU_TO_KM / this.scale) * this.transform.k); // au
    // find the nearest available scale value:
    const scale = SCALE_POSSIBLE_VALUES.sort((a, b) => Math.abs(scaleSizeAU - a.max) - Math.abs(scaleSizeAU - b.max))[0];
    const scaleWidth = ((scale.max * AU_TO_KM) / this.scale) * this.transform.k; // px
    const scaleSizeKm = Math.round(scale.max * AU_TO_KM); // km

    this.groupForegroundSelection.select('.scale').remove();
    const groupScaleSelection = this.groupForegroundSelection.append('g').attr('class', 'scale');

    // horizontal line
    groupScaleSelection.append('path')
                        .attr('shape-rendering', 'crispEdges')
                        .attr('d', `M ${paddingX + COMPAS_WIDTH} ${window.innerHeight - paddingY} L ${paddingX + COMPAS_WIDTH + scaleWidth} ${window.innerHeight - paddingY}`);

    // ticks
    for (let i = 0; i < scale.max; i = i + scale.tickInterval) {
      const nbPx = ((i * AU_TO_KM) / this.scale) * this.transform.k;
      const height = (i % (SCALE_LARGE_TICK_STEP * scale.tickInterval) === 0 || i === scale.max ? SCALE_HEIGHT_LARGE_TICK : SCALE_HEIGHT_SMALL_TICK);
      groupScaleSelection.append('path')
                          .attr('shape-rendering', 'crispEdges')
                          .attr('d', `M ${paddingX + COMPAS_WIDTH + nbPx} ${window.innerHeight - paddingY - (height / 2)} L ${paddingX + COMPAS_WIDTH + nbPx} ${window.innerHeight - paddingY + (height / 2)}`);
    }
    // last tick (not included in the previous loop because of float rounding error)
    const nbPxLastTick = ((scale.max * AU_TO_KM) / this.scale) * this.transform.k;
    groupScaleSelection.append('path')
                        .attr('shape-rendering', 'crispEdges')
                        .attr('d', `M ${paddingX + COMPAS_WIDTH + nbPxLastTick} ${window.innerHeight - paddingY - (SCALE_HEIGHT_LARGE_TICK / 2)} L ${paddingX + COMPAS_WIDTH + nbPxLastTick} ${window.innerHeight - paddingY + (SCALE_HEIGHT_LARGE_TICK / 2)}`);

    const translationParams = {
      NB_AU: formatNumber(scale.max, this.translateService.currentLang, '1.0-4'),
      NB_KM: formatNumber(scaleSizeKm, this.translateService.currentLang, '1.0-4')
    };
    const translationsKeys = [
      SCALE_TEXT_KEY, SCALE_TITLE_KEY, SCALE_TITLE_PLURAL_KEY, COMPASS_TITLE_I18N_KEY
    ];
    this.translateService.get(translationsKeys, translationParams).subscribe((translations) => {
      // text
      groupScaleSelection.append('text')
                            .text(translations[SCALE_TEXT_KEY])
                            .attr('dominant-baseline', 'central')
                            .attr('x', paddingX + COMPAS_WIDTH + scaleWidth + SCALE_TEXT_PADDING)
                            .attr('y', window.innerHeight - paddingY)
                          .append('title')
                            .html(scale.max > 1 ? translations[SCALE_TITLE_PLURAL_KEY] : translations[SCALE_TITLE_KEY]);

      // compass
      this.groupForegroundSelection.select('.compass').remove();
      const groupCompassSelection = this.groupForegroundSelection.append('g').attr('class', 'compass');

      groupCompassSelection.append('text')
                              .html('▲')
                              .attr('dominant-baseline', 'central')
                              .attr('x', paddingX)
                              .attr('y', window.innerHeight - paddingY - (SCALE_HEIGHT_LARGE_TICK / 2) - (SCALE_TEXT_PADDING / 4))
                              .attr('class', 'compass')
                            .append('title')
                              .html(translations[COMPASS_TITLE_I18N_KEY]);
      groupCompassSelection.append('text')
                              .html('ɤ')
                              .attr('dominant-baseline', 'central')
                              .attr('x', paddingX)
                              .attr('y', window.innerHeight - paddingY + (SCALE_HEIGHT_LARGE_TICK / 2) + (SCALE_TEXT_PADDING / 4))
                              .attr('class', 'compass')
                            .append('title')
                              .html(translations[COMPASS_TITLE_I18N_KEY]);
    });
  }

  private zoomToCelestialBody(body: CelestialBody, forceZoom: boolean): Observable<unknown> {
    const bbox = this.getBoundingBox(body);
    let scale = this.getScale(body);
    // do not dezoom when clicking on a body, only when clicking on a search result :
    if (!forceZoom && scale < this.transform.k) {
      scale = this.transform.k;
    }

    return this.zoomTo(bbox, scale);
  }

  private zoomToLagrangePoint(type: LagrangePointType): Observable<unknown> {
    const element: any = select('.lagrange-point-' + type).node();
    return this.zoomTo(element.getBBox(), ZOOM_EXTENT[1]);
  }

  private zoomTo(bbox: DOMRect, scale: number): Observable<unknown> {
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
   * SVG insanity: getBBox() does not take into account rotation of the element,
   * so we have to wrap the element into a group, get the bbox, and remove the group.
   */
  private getBoundingBox(body: CelestialBody): DOMRect {
    const element: any = select('.' + body.id).node();
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
                               .scale(Math.min(this.center.x * 2, this.center.y * 2) / (SOLAR_SYSTEM_SIZE / this.scale));
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
        if (body.type === CelestialBodyType.DWARF_PLANET) {
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
    select('.label-' + body.id).classed('selected', true);
    select('.label-symbol-' + body.id).classed('selected', true);
    select('.orbit-' + body.id).classed('selected', true);

    if (this.celestialBodyDialogRef) {
      this.celestialBodyDialogRef.componentInstance.body = body;
    } else {
      this.celestialBodyDialogRef = this.dialog.open(CelestialBodyDialogComponent, {
        width: '500px',
        maxHeight: '100vh',
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

    // update the browser url:
    const url = new URL(location.href);
    url.searchParams.set('goto', body.id);
    history.pushState(null, '', url);
  }

}
