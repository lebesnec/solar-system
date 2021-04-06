import { Component, AfterViewInit } from '@angular/core';
import { CelestialBody, Point } from './scene.model';
import * as d3 from 'd3';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements AfterViewInit {

  public bodies: CelestialBody[] = [
    {
      position: {
        x: 0,
        y: 0
      },
      speed: 0,
      orientation: 0,
      mass: 1.9885e30,
      radius: 696342,
      name: 'sun'
    }, {
      position: {
        x: 0,
        y: 147095000
      },
      speed: 29.78,
      orientation: 60,
      mass: 5.97237e24,
      radius: 6371,
      name: 'earth'
    }
  ];

  private width: number;
  private height: number;
  private center: Point;

  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.center = {
      x: this.width / 2,
      y: this.height / 2
    };
  }

  ngAfterViewInit() {
    var svg = d3.select('svg');
    var g = svg.append('g'); 

    const zoom = d3.zoom().on('zoom', (e) => g.attr('transform', e.transform));
    svg.call(zoom);
    svg.call(zoom.transform, d3.zoomIdentity.translate(this.center.x, this.center.y).scale(10 / this.bodies[0].radius));

    g.selectAll('.celestial-body')
      .data(this.bodies)
      .enter()
      .append('circle')
        .attr('class', 'celestial-body')
        .attr('r', (body) => body.radius)
        .attr('cx', (body) => body.position.x)
        .attr('cy', (body) => body.position.y);
  }

}
