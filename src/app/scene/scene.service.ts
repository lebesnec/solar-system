import { Injectable } from '@angular/core';
import { CelestialBody, OrbitPoint, Point } from './scene.model';
import * as d3 from 'd3';
import { DEG_TO_RAD, G, KM_TO_PX } from './scene.data';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  constructor() { }

  /** 
   * position in px
   */
  public getOrbit(body: CelestialBody, nbPoints = 360): OrbitPoint[] {
    return d3.range(0, 360, 360 / nbPoints).map((trueAnomaly) => {
      const point = this.getPositionForTrueAnomaly(body, trueAnomaly)
      return {
        trueAnomaly,
        x: point.x,
        y: point.y
      };
    });
  }

  /**
   * in px
   */
  public getPositionForTrueAnomaly(body: CelestialBody, trueAnomaly): Point {
    const d = this.getDistanceToFocusPoint(body, trueAnomaly);
    const yKm = d * Math.cos(trueAnomaly * DEG_TO_RAD);
    const xKm = d * Math.sin(trueAnomaly * DEG_TO_RAD);

    // we have the position relative to the orbited body, so we add its 
    // position to have the absolute postion of the orbiting body :
    return {
      x: (xKm / KM_TO_PX) + body.orbitBody.position.x,
      y: (yKm / KM_TO_PX) + body.orbitBody.position.y
    };
  }

  /**
   * https://en.wikipedia.org/wiki/Kepler_orbit#Development_of_the_laws
   * @param body 
   * @returns km
   */
  public getDistanceToFocusPoint(body: CelestialBody, trueAnomaly: number): number {
    return (body.semiMajorAxis * (1 - (body.eccentricity ** 2))) / (1 + (body.eccentricity * Math.cos(trueAnomaly * DEG_TO_RAD)));
  }

  /**
   * https://en.wikipedia.org/wiki/Semi-major_and_semi-minor_axes#Orbital_period
   * @param body 
   * @returns hours
   */
  public getOrbitalPeriod(body: CelestialBody): number {
    if (body.orbitBody) {
      // TODO > max_int
      return 2 * Math.PI * Math.sqrt(((body.semiMajorAxis * 1000) ** 3) / (G * body.orbitBody.mass)) / (60 * 60);
    } else {
      return 0;
    }
  }

}
