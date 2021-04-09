import { Component, AfterViewInit } from '@angular/core';
import { Point } from './scene.model';
import * as d3 from 'd3';
import { SceneService } from './scene.service';

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
    const svg = d3.select('svg'); // .attr("viewBox", [0, 0, this.width, this.height]);
    const g = svg.append('g');

    this.initZoom(svg, g);

    g.selectAll('.celestial-body')
      .data(this.sceneService.SOLAR_SYSTEM)
      .enter()
      .append('circle')
        .attr('class', (body) => 'celestial-body ' + body.type)
        .attr('r', (body) => body.radius)
        .attr('cx', (body) => body.position.x)
        .attr('cy', (body) => body.position.y);

    g.selectAll('.orbit')
      .data(this.sceneService.getOrbit(this.sceneService.EARTH))
      .enter()
      .append('circle')
        .attr('class', 'orbit')
        .attr('r', 1 / this.scale) //TODO 
        .attr('cx', (position) => position.x / 10)
        .attr('cy', (position) => position.y / 10);
  }

  private initZoom(svg, g) {
    const zoom = d3.zoom().on('zoom', (e) => { // .extent([[0, 0], [this.width, this.height]]).scaleExtent([1, 8])
      this.scale = e.transform.k;
      g.attr('transform', e.transform);
    });
    svg.call(zoom);

    const defaultZoom = d3.zoomIdentity
                          .translate(this.center.x, this.center.y)
                          // .scale(1);
                          .scale(Math.min(this.width, this.height) / this.sceneService.SOLAR_SYSTEM_SIZE);
    svg.call(zoom.transform, defaultZoom);
  }

}
