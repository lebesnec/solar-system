import { Component, AfterViewInit } from '@angular/core';
import { Point } from './scene.model';
import * as d3 from 'd3';
import { SceneService } from './scene.service';
import { KM_TO_PX, SOLAR_SYSTEM, SOLAR_SYSTEM_SIZE } from './scene.data';

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

  ngAfterViewInit() {
    const svg = d3.select('svg');
    const g = svg.append('g');

    this.initZoom(svg, g);

    g.selectAll('.celestial-body')
      .data(SOLAR_SYSTEM)
      .join('circle')
        .attr('class', (body) => 'celestial-body ' + body.type + ' ' + body.id)
        .attr('r', (body) => body.radius / KM_TO_PX)
        .attr('cx', (body) => body.position.x)
        .attr('cy', (body) => body.position.y);

    const orbitData = SOLAR_SYSTEM.filter((body) => body.id !== 'sun')
                                  .map((body) => this.sceneService.getOrbit(body))
                                  .flat();

    g.selectAll('.orbit')
      .data(orbitData)
      .join('circle')
        .attr('class', (orbit) => 'orbit ' + orbit.body.type + ' ' + orbit.body.id)
        .attr('r', 0.01 / this.scale) //TODO 
        .attr('cx', (orbit) => orbit.position.x)
        .attr('cy', (orbit) => orbit.position.y);
  }

  private initZoom(svg, g) {
    const zoom = d3.zoom().on('zoom', (e) => {
      this.scale = e.transform.k;
      g.attr('transform', e.transform);
    });
    svg.call(zoom);

    const defaultZoom = d3.zoomIdentity
                          .translate(this.center.x, this.center.y)
                          .scale(Math.min(this.width, this.height) / (SOLAR_SYSTEM_SIZE / KM_TO_PX));
    svg.call(zoom.transform, defaultZoom);
  }

}
