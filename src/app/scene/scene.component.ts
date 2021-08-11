import {AfterViewInit, Component} from '@angular/core';
import {CELESTIAL_BODY_TYPE, CelestialBody, OrbitPoint, Point} from './scene.model';
import {select} from 'd3-selection';
import {curveCardinalClosed, line} from 'd3-shape';
import {zoom, zoomIdentity} from 'd3-zoom';
import {KM_TO_PX, SceneService, SOLAR_SYSTEM_SIZE} from './scene.service';
import {SOLAR_SYSTEM} from './data/SolarSystem.data';

const NB_POINTS_ORBIT = 90;

enum ZoomLevel {
  SOLAR_SYSTEM = 'zoom-level-solar-system',
  PLANET = 'zoom-level-planet',
  SMALL_BODY = 'zoom-level-small-body'
}

const SCALE_STAR = 0.5;
const SCALE_PLANET = 3.0;
const SCALE_SMALL_BODY = 6.0;

const MIN_BODY_RADIUS = 50; // km
const LABEL_DISTANCE: Point = { x: 20, y: 20 }; // px
const LABEL_TRANSITION_MS = 50; // ms
const LABEL_PATH_MARGIN = 4; // px
const ZOOM_TRANSITION_MS = 500; // ms

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements AfterViewInit {

  private svgSelection: any;
  private groupZoomableSelection: any;
  private groupStaticSelection: any;
  private d3Zoom: any;
  private labelsPath: any;
  private width: number = window.innerWidth; // px
  private height: number = window.innerHeight; // px
  private scale: number;
  private zoomLevel: ZoomLevel;

  private get center(): Point {
    return {
      x: window.innerWidth / 2, // px
      y: window.innerHeight / 2 // px
    };
  }

  constructor(
    private sceneService: SceneService
  ) { }

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
      this.zoomLevel = (this.scale >= SCALE_SMALL_BODY ? ZoomLevel.SMALL_BODY :
                        this.scale >= SCALE_PLANET ? ZoomLevel.PLANET :
                          ZoomLevel.SOLAR_SYSTEM);

      // tslint:disable-next-line:forin
      for (const level in ZoomLevel) {
        this.svgSelection.classed(ZoomLevel[ level ], this.zoomLevel === ZoomLevel[ level ]);
      }
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
    const labelsData = SOLAR_SYSTEM.map((body) => {
      return {
        body,
        boundingBox: (select('#' + body.id).node() as any).getBoundingClientRect() // TODO store node
      };
    });

    this.labelsPath.style('opacity', 0);

    this.groupStaticSelection.selectAll('.label')
                             .data(labelsData, (d) => d.body.id)
                             .join(
                              enter => enter.append('text')
                                            .attr('id', (d) => 'labeltext_' + d.body.id)
                                            .attr('class', (d) => 'label ' + d.body.type + ' ' + d.body.id)
                                            .text((d) => d.body.id)
                                            .attr('x', (d) => d.boundingBox.right + LABEL_DISTANCE.x)
                                            .attr('y', (d) => d.boundingBox.bottom + LABEL_DISTANCE.y)
                                            .on('mouseover', (event, d) => {
                                              const textBoundingBox = event.currentTarget.getBoundingClientRect();
                                              this.labelsPath.attr('d', `M ${d.boundingBox.x + (d.boundingBox.width / 2)} ${d.boundingBox.y + (d.boundingBox.height / 2)}
                                                                         L ${d.boundingBox.right + LABEL_DISTANCE.x - LABEL_PATH_MARGIN} ${d.boundingBox.bottom + LABEL_DISTANCE.y + LABEL_PATH_MARGIN}
                                                                         L ${d.boundingBox.right + LABEL_DISTANCE.x + textBoundingBox.width + LABEL_PATH_MARGIN} ${d.boundingBox.bottom + LABEL_DISTANCE.y + LABEL_PATH_MARGIN}`)
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
                                              const bbox = (select('#' + d.body.id).node() as any).getBBox();
                                              const scale = this.getScale(d.body);
                                              const zoomTo = zoomIdentity
                                                              .translate(this.center.x + ((-bbox.x - bbox.width / 2) * scale), this.center.y + ((-bbox.y - bbox.height / 2) * scale))
                                                              .scale(scale);
                                              this.svgSelection.transition()
                                                                .duration(ZOOM_TRANSITION_MS)
                                                                .call(this.d3Zoom.transform, zoomTo);

                                            }),
                              update => update.attr('x', (d) => d.boundingBox.right + LABEL_DISTANCE.x)
                                              .attr('y', (d) =>  d.boundingBox.bottom + LABEL_DISTANCE.y)
                            );
    this.arrangeLabels();
  }

  private arrangeLabels(): void {
    const labels = this.groupStaticSelection.selectAll('.label');
    let move = 1;

    while (move > 0) {
      move = 0;

      labels.each((d1, i1, nodes1) => {
        const label1 = nodes1[i1];
        let bb1 = label1.getBoundingClientRect();

        labels.each((d2, i2, nodes2) => {
          const label2 = nodes2[i2];
          if (label1 !== label2) {
            const bb2 = label2.getBoundingClientRect();
            if ((Math.abs(bb1.left - bb2.left) * 2 < (bb1.width + bb2.width)) && (Math.abs(bb1.top - bb2.top) * 2 < (bb1.height + bb2.height))) {
              // overlap, move labels
              const dx = (Math.max(0, bb1.right - bb2.left) + Math.min(0, bb1.left - bb2.right)) * 0.01;
              const dy = (Math.max(0, bb1.bottom - bb2.top) + Math.min(0, bb1.top - bb2.bottom)) * 0.02;
              move += Math.abs(dx) + Math.abs(dy);

              select(label1).attr('x', +select(label1).attr('x') + dx).attr('y', +select(label1).attr('y') + dy);
              select(label2).attr('x', +select(label2).attr('x') - dx).attr('y', +select(label2).attr('y') - dy);
              bb1 = label1.getBoundingClientRect();
            }
          }
        });
      });
    }
  }

  private getScale(body: CelestialBody): number {
    switch (body.type) {
      case CELESTIAL_BODY_TYPE.STAR:
        return SCALE_STAR;
      case CELESTIAL_BODY_TYPE.SATELLITE:
        return SCALE_SMALL_BODY;
      default:
        return SCALE_PLANET;
    }
  }

}
