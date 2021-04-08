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

  constructor(
    private sceneService: SceneService
  ) { }

  ngAfterViewInit() {
    var svg = d3.select('svg');
    var g = svg.append('g');

    const zoom = d3.zoom().on('zoom', (e) => g.attr('transform', e.transform));
    svg.call(zoom);
    const defaultZoom = d3.zoomIdentity
                          .translate(this.center.x, this.center.y)
                          .scale(Math.min(this.width, this.height) / this.sceneService.SOLAR_SYSTEM_SIZE);
    svg.call(zoom.transform, defaultZoom);

    g.selectAll('.celestial-body')
      .data(this.sceneService.SOLAR_SYSTEM)
      .enter()
      .append('circle')
        .attr('class', (body) => 'celestial-body ' + body.type)
        .attr('r', (body) => body.radius)
        .attr('cx', (body) => body.position.x)
        .attr('cy', (body) => body.position.y);
  }

}
