import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CELESTIAL_BODY_TYPE, CelestialBody, OrbitPoint, Point} from './scene.model';
import {select} from 'd3-selection';
import {curveCardinalClosed, line} from 'd3-shape';
import {zoom, zoomIdentity} from 'd3-zoom';
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

const NB_POINTS_ORBIT = 90;
const MIN_BODY_RADIUS = 50; // km
const LABEL_SPACING = 15;
const LABEL_DISTANCE_TO_BODY: Point = { x: 20, y: 20 }; // px
const LABEL_TRANSITION_MS = 50; // ms
const LABEL_PATH_MARGIN = 4; // px
const ZOOM_TRANSITION_MS = 500; // ms

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit, AfterViewInit {

  private svgSelection: any;
  private groupZoomableSelection: any;
  private groupStaticSelection: any;
  private d3Zoom: any;
  private labelsPath: any;
  private width: number = window.innerWidth; // px
  private height: number = window.innerHeight; // px
  private scale: number;

  private get center(): Point {
    return {
      x: window.innerWidth / 2, // px
      y: window.innerHeight / 2 // px
    };
  }

  constructor(
    private sceneService: SceneService,
    private searchPanelService: SearchPanelService
  ) { }

  public ngOnInit(): void {
      this.searchPanelService.onBodySelected.subscribe((body) => {
        this.zoomTo(body);
      });
  }

  public ngAfterViewInit(): void {
    this.svgSelection = select('svg');
    this.groupZoomableSelection = this.svgSelection.append('g');
    this.groupStaticSelection = this.svgSelection.append('g');

    this.labelsPath = this.groupStaticSelection.append('path')
                                                  .attr('class', 'label-path')
                                                  .style('opacity', 0);

    this.initOrbits();
    this.initCelestialBodies();
    this.initZoom();
  }

  private initZoom(): void {
    this.d3Zoom = zoom().on('zoom', (e) => {
      this.scale = e.transform.k;

      this.groupZoomableSelection.attr('transform', e.transform);
      this.initLabels();
    });
    this.svgSelection.call(this.d3Zoom);

    const defaultZoom = zoomIdentity
                          .translate(this.center.x, this.center.y)
                          .scale(Math.min(this.width, this.height) / (SOLAR_SYSTEM_SIZE / KM_TO_PX));
    this.svgSelection.call(this.d3Zoom.transform, defaultZoom);
  }

  private initCelestialBodies(): void {
    this.groupZoomableSelection.selectAll('.celestial-body')
                                .data(SOLAR_SYSTEM, (d) => d.id)
                                .join(
                                  enter => enter.append('circle')
                                                .attr('id', (body) => body.id)
                                                .attr('class', (body) => 'celestial-body ' + body.type + ' ' + body.id)
                                                // nothing will show below a MIN_BODY_RADIUS radius :
                                                .attr('r', (body) => Math.max(body.radius, MIN_BODY_RADIUS) / KM_TO_PX)
                                                .attr('cx', (body) => body.position.x)
                                                .attr('cy', (body) => body.position.y)
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
    const lineFn = line<OrbitPoint>().curve(curveCardinalClosed).x(p => p.x).y(p => p.y);

    this.groupZoomableSelection.selectAll('.orbit')
                               .data(orbitsData, (d) => d.body.id)
                               .join(
                                 enter => enter.append('path')
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

    const labels = this.groupStaticSelection.selectAll('.label')
                       .data(labelsData, (d) => d.body.id)
                       .join(
                        enter => enter.append('text')
                                      .attr('id', (d) => 'labeltext_' + d.body.id)
                                      .attr('class', (d) => 'label ' + d.body.type + ' ' + d.body.id)
                                      .text((d) => d.body.id)
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
                                      })
                                      .on('mouseout', () => {
                                        this.labelsPath.transition()
                                                    .duration(LABEL_TRANSITION_MS)
                                                    .style('opacity', 0);
                                      })
                                      .on('mousedown', () => {
                                        this.labelsPath.style('opacity', 0);
                                      })
                                      .on('click', (event, d) => {
                                        this.zoomTo(d.body);
                                      }),
                        update => update.attr('x', (d) => d.boundingBox.right + LABEL_DISTANCE_TO_BODY.x)
                                        .attr('y', (d) =>  d.boundingBox.bottom + LABEL_DISTANCE_TO_BODY.y)
                      );
  }

  private zoomTo(body: CelestialBody): void {
    const bodySelection = select('#' + body.id);

    const bbox = (bodySelection.node() as any).getBBox();
    const scale = this.getScale(body);
    const zoomTo = zoomIdentity.translate(
                      this.center.x + ((-bbox.x - bbox.width / 2) * scale),
                      this.center.y + ((-bbox.y - bbox.height / 2) * scale)
                    )
                    .scale(scale);
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

}
