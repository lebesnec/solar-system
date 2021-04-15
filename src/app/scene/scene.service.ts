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
  public getOrbit(body: CelestialBody): OrbitPoint[] {
    return d3.range(360).map((trueAnomaly) => {
      return {
        body,
        trueAnomaly,
        position: this.getPositionFromTrueAnomaly(body, trueAnomaly)
      };
    });
  }

  /**
   * in px
   */
  public getPositionFromTrueAnomaly(body: CelestialBody, trueAnomaly): Point {
    const d = this.getDistanceToFocusPoint(body, trueAnomaly);
    return {
      x: d * Math.cos(trueAnomaly * DEG_TO_RAD) / KM_TO_PX,
      y: d * Math.sin(trueAnomaly * DEG_TO_RAD) / KM_TO_PX
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
