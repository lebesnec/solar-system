import { Injectable } from '@angular/core';
import { CelestialBody, CELESTIAL_BODY_TYPE } from './scene.model';

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
  public readonly SOLAR_SYSTEM_SIZE = 1 * this.AU_TO_KM; // TODO 80

  public readonly SUN: CelestialBody = {
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

  public readonly EARTH: CelestialBody = {
    position: {
      x: 0,
      y: 147095000
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

  public readonly SOLAR_SYSTEM: CelestialBody[] = [ this.SUN, this.EARTH ];

  constructor() { 
    this.SUN.satellites = [ this.EARTH ];
  }

  public setTrueAnomaly(body: CelestialBody, trueAnomaly) {
    body.trueAnomaly = trueAnomaly;
    const d = this.getDistanceToFocusPoint(body);
    body.position = {
      x: d * Math.sin((90 - trueAnomaly) * this.DEG_TO_RAD),
      y: d * Math.sin(trueAnomaly * this.DEG_TO_RAD),
    };
  }

  /**
   * https://en.wikipedia.org/wiki/Kepler_orbit#Development_of_the_laws
   * @param body 
   * @returns km
   */
  public getDistanceToFocusPoint(body: CelestialBody): number {
    return (body.semiMajorAxis * (1 - (body.eccentricity ** 2))) / (1 + (body.eccentricity * Math.cos(body.trueAnomaly)));
  }

  /**
   * https://en.wikipedia.org/wiki/Semi-major_and_semi-minor_axes#Orbital_period
   * @param body 
   * @returns hours
   */
  public getOrbitalPeriod(body: CelestialBody): number {
    if (body.orbitBody) {
      return 2 * Math.PI * Math.sqrt(((body.semiMajorAxis * 1000) ** 3) / (this.G * body.orbitBody.mass)) / (60 * 60);
    }else {
      return 0;
    }
  }

}
