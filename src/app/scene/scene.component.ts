import { Component, AfterViewInit } from '@angular/core';
import {OrbitPoint, Point} from './scene.model';
import { select } from 'd3-selection';
import { line, curveCardinalClosed } from 'd3-shape';
import { zoom, zoomIdentity } from 'd3-zoom';
import {KM_TO_PX, SceneService, SOLAR_SYSTEM_SIZE} from './scene.service';
import { SOLAR_SYSTEM} from './data/SolarSystem.data';

const NB_POINTS_ORBIT = 90;

enum ZoomLevel {
  SOLAR_SYSTEM = 'zoom-level-solar-system',
  PLANET = 'zoom-level-planet'
}

const SCALE_PLANET = 0.0007;
const TOOLTIP_DISTANCE: Point = { x: 20, y: 20 };
const TOOLTIP_TRANSITION_MS = 50;
const TOOLTIP_PATH_MARGIN = 5;

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements AfterViewInit {

  private svgSelection: any;
  private groupZoomableSelection: any;
  private groupStaticSelection: any;
  private width: number = window.innerWidth; // px
  private height: number = window.innerHeight; // px
  private center: Point = {
    x: window.innerWidth / 2, // px
    y: window.innerHeight / 2 // px
  };
  private scale: number;
  private zoomLevel: ZoomLevel;

  constructor(
    private sceneService: SceneService
  ) { }

  public ngAfterViewInit(): void {
    this.svgSelection = select('svg');
    this.groupZoomableSelection = this.svgSelection.append('g');
    this.groupStaticSelection = this.svgSelection.append('g');

    this.initCelestialBodies();
    this.initOrbits();
    this.initZoom();
  }

  private initZoom(): void {
    const d3Zoom = zoom()
      .on('zoom', (e) => {
        this.scale = e.transform.k;
        this.zoomLevel = (this.scale >= SCALE_PLANET) ? ZoomLevel.PLANET : ZoomLevel.SOLAR_SYSTEM;

        // tslint:disable-next-line:forin
        for (const level in ZoomLevel) {
          this.svgSelection.classed(ZoomLevel[level], this.zoomLevel === ZoomLevel[level]);
        }
        this.groupZoomableSelection.attr('transform', e.transform);
        this.initTooltips();
      });
    this.svgSelection.call(d3Zoom);

    const defaultZoom = zoomIdentity
                          .translate(this.center.x, this.center.y)
                          .scale(Math.min(this.width, this.height) / (SOLAR_SYSTEM_SIZE / KM_TO_PX));
    this.svgSelection.call(d3Zoom.transform, defaultZoom);
  }

  private initCelestialBodies(): void {
    this.groupZoomableSelection.selectAll('.celestial-body')
                                .data(SOLAR_SYSTEM, (d) => d.id)
                                .join(
                                  enter => enter.append('circle')
                                                .attr('id', (body) => body.id)
                                                .attr('class', (body) => 'celestial-body ' + body.type + ' ' + body.id)
                                                .attr('r', (body) => body.radius / KM_TO_PX)
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

  private initTooltips(): void {
    const tooltipsData = SOLAR_SYSTEM.map((body) => {
      return {
        body,
        boundingBox: (select('#' + body.id).node() as any).getBoundingClientRect() // TODO store node
      };
    });

    const tooltipPath = this.groupStaticSelection.append('path')
                                                  .attr('class', 'tooltip-path')
                                                  .style('opacity', 0);

    this.groupStaticSelection.selectAll('.tooltip')
                             .data(tooltipsData, (d) => d.body.id)
                             .join(
                              enter => enter.append('text')
                                            .attr('id', (d) => 'tooltiptext_' + d.body.id)
                                            .attr('class', (d) => 'tooltip ' + d.body.type + ' ' + d.body.id)
                                            .text((d) => d.body.id)
                                            .attr('x', (d) => d.boundingBox.right + TOOLTIP_DISTANCE.x)
                                            .attr('y', (d) => d.boundingBox.bottom + TOOLTIP_DISTANCE.y)
                                            .on('mouseover', (event, d) => {
                                              const textBoundingBox = (select('#' + 'tooltiptext_' + d.body.id).node() as any).getBoundingClientRect();
                                              tooltipPath.attr('d', `M ${d.boundingBox.x + (d.boundingBox.width / 2)} ${d.boundingBox.y + (d.boundingBox.height / 2)}
                                                                     L ${d.boundingBox.right + TOOLTIP_DISTANCE.x - TOOLTIP_PATH_MARGIN} ${d.boundingBox.bottom + TOOLTIP_DISTANCE.y + TOOLTIP_PATH_MARGIN}
                                                                     L ${d.boundingBox.right + TOOLTIP_DISTANCE.x + textBoundingBox.width + TOOLTIP_PATH_MARGIN} ${d.boundingBox.bottom + TOOLTIP_DISTANCE.y + TOOLTIP_PATH_MARGIN}`)
                                                          .transition()
                                                          .duration(TOOLTIP_TRANSITION_MS)
                                                          .style('opacity', 1);
                                            })
                                            .on('mouseout', () => {
                                              tooltipPath.transition()
                                                          .duration(TOOLTIP_TRANSITION_MS)
                                                          .style('opacity', 0);
                                            }),
                              update => update.attr('x', (d) => d.boundingBox.right + TOOLTIP_DISTANCE.x)
                                              .attr('y', (d) =>  d.boundingBox.bottom + TOOLTIP_DISTANCE.y)
                            );
  }

}
