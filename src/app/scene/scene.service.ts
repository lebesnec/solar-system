import { Injectable } from '@angular/core';
import { CelestialBody, CELESTIAL_BODY_TYPE, Point } from './scene.model';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  /**
   * degrees to radian
   */
  public readonly DEG_TO_RAD = Math.PI / 180;

  /**
   * Astronomical units to kilometers
   */
  public readonly AU_TO_KM = 1.496e8;

  /**
   * Gravitational constant in m^3.kg^−1.s^−2
   */
  public readonly G = 6.6743e-11;
  
  /**
   * in km
   */
  public readonly SOLAR_SYSTEM_SIZE = 80 * this.AU_TO_KM;

  /**
   * SVG does not work well with big number so we have to divide each value
   * (in km) by this ratio before drawing. This does NOT take into account
   * the scale applied by the current zoom !
   * https://oreillymedia.github.io/Using_SVG/extras/ch08-precision.html
   */
  public readonly KM_TO_PX = 1e5;

  public readonly SUN: CelestialBody = {
    id: 'sun',
    position: {
      x: 0,
      y: 0
    },
    speed: 0,
    mass: 1.9885e30,
    radius: 696342,
    semiMajorAxis: 0,
    eccentricity: 0,
    trueAnomaly: 0,
    type: CELESTIAL_BODY_TYPE.SUN,
    satellites: [],
    orbitBody: null
  };

  public readonly MERCURY: CelestialBody = {
    id: 'mercury',
    position: {
      x: 0,
      y: 57909050 / this.KM_TO_PX // TODO
    },
    speed: 47.36,
    mass: 3.3011e23,
    radius: 2440,
    semiMajorAxis: 57909050,
    eccentricity: 0.20563,
    trueAnomaly: 0,
    type: CELESTIAL_BODY_TYPE.PLANET,
    satellites: [],
    orbitBody: this.SUN
  };

  public readonly EARTH: CelestialBody = {
    id: 'earth',
    position: {
      x: 0,
      y: 147095000 / this.KM_TO_PX // TODO
    },
    speed: 29.78,
    mass: 5.97237e24,
    radius: 6371,
    semiMajorAxis: 149598023,
    eccentricity: 0.0167086,
    trueAnomaly: 0,
    type: CELESTIAL_BODY_TYPE.PLANET,
    satellites: [],
    orbitBody: this.SUN
  };

  public readonly SOLAR_SYSTEM: CelestialBody[] = [ this.SUN, this.MERCURY, this.EARTH ];

  constructor() { 
    this.SUN.satellites = [ this.MERCURY, this.EARTH ];
  }

  /** 
   * in px
   */
  public getOrbit(body: CelestialBody): Point[] {
    return d3.range(360).map((trueAnomaly) => this.getPositionFromTrueAnomaly(body, trueAnomaly));
  }

  /**
   * in px
   */
  public getPositionFromTrueAnomaly(body: CelestialBody, trueAnomaly): Point {
    const d = this.getDistanceToFocusPoint(body, trueAnomaly);
    console.log(d * Math.cos(trueAnomaly * this.DEG_TO_RAD), d * Math.sin(trueAnomaly * this.DEG_TO_RAD));
    return {
      x: d * Math.cos(trueAnomaly * this.DEG_TO_RAD) / this.KM_TO_PX,
      y: d * Math.sin(trueAnomaly * this.DEG_TO_RAD) / this.KM_TO_PX
    };
  }

  /**
   * https://en.wikipedia.org/wiki/Kepler_orbit#Development_of_the_laws
   * @param body 
   * @returns km
   */
  public getDistanceToFocusPoint(body: CelestialBody, trueAnomaly: number): number {
    return (body.semiMajorAxis * (1 - (body.eccentricity ** 2))) / (1 + (body.eccentricity * Math.cos(trueAnomaly * this.DEG_TO_RAD)));
  }

  /**
   * https://en.wikipedia.org/wiki/Semi-major_and_semi-minor_axes#Orbital_period
   * @param body 
   * @returns hours
   */
  public getOrbitalPeriod(body: CelestialBody): number {
    if (body.orbitBody) {
      // TODO > max_int
      return 2 * Math.PI * Math.sqrt(((body.semiMajorAxis * 1000) ** 3) / (this.G * body.orbitBody.mass)) / (60 * 60);
    } else {
      return 0;
    }
  }

}
