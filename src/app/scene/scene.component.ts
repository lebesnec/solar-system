import { Component, AfterViewInit } from '@angular/core';
import {OrbitPoint, Point} from './scene.model';
import { select } from 'd3-selection';
import { line, curveCardinalClosed } from 'd3-shape';
import { zoom, zoomIdentity } from 'd3-zoom';
import {KM_TO_PX, SceneService, SOLAR_SYSTEM_SIZE} from './scene.service';
import { SOLAR_SYSTEM} from './data/SolarSystem.data';

const NB_POINTS_ORBIT = 90;

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements AfterViewInit {

  private width: number = window.innerWidth; // px
  private height: number = window.innerHeight; // px
  private center: Point = {
    x: window.innerWidth / 2, // px
    y: window.innerHeight / 2 // px
  };
  private scale: number;

  constructor(
    private sceneService: SceneService
  ) { }

  public ngAfterViewInit(): void {
    const svg = select('svg');
    const g = svg.append('g');

    this.initZoom(svg, g);
    this.initCelestialBodies(g);
    this.initOrbits(g);
  }

  private initZoom(svg, g): void {
    const d3Zoom = zoom().on('zoom', (e) => {
      this.scale = e.transform.k;
      g.attr('transform', e.transform);
    });
    svg.call(d3Zoom);

    const defaultZoom = zoomIdentity
                          .translate(this.center.x, this.center.y)
                          .scale(Math.min(this.width, this.height) / (SOLAR_SYSTEM_SIZE / KM_TO_PX));
    svg.call(d3Zoom.transform, defaultZoom);
  }

  private initCelestialBodies(g): void {
    g.selectAll('.celestial-body')
      .data(SOLAR_SYSTEM)
      .join('circle')
        .attr('class', (body) => 'celestial-body ' + body.type + ' ' + body.id)
        .attr('r', (body) => body.radius / KM_TO_PX)
        .attr('cx', (body) => body.position.x)
        .attr('cy', (body) => body.position.y);
  }

  private initOrbits(g): void {
    const orbitsData = SOLAR_SYSTEM
                        .filter((body) => body.id !== 'sun')
                        .map((body) => {
                          return {
                            body,
                            path: this.sceneService.getOrbit(body, NB_POINTS_ORBIT)
                          };
                        });
    const lineFn = line<OrbitPoint>().curve(curveCardinalClosed).x(p => p.x).y(p => p.y);

    g.selectAll('.orbit')
      .data(orbitsData)
      .join('path')
        .attr('class', (orbit) => 'orbit ' + orbit.body.type + ' ' + orbit.body.id)
        .attr('d', (orbit) => lineFn(orbit.path));
  }

}
