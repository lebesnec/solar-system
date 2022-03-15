import {Injectable} from '@angular/core';
import {CelestialBody, Ellipse, OrbitPoint, Point} from './scene.model';
import * as d3 from 'd3';
import {SOLAR_SYSTEM} from './data/SolarSystem.data';

/**
 * SVG does not work well with big number so we have to divide each value
 * (in km) by this ratio before drawing. SCG also doesn't have much decimal
 * precision so we can't have a to big ratio or small bodies won't render well.
 * This does NOT take into account the scale applied by the current zoom!
 * https://oreillymedia.github.io/Using_SVG/extras/ch08-precision.html
 */
export const KM_TO_PX = 1e5;
/**
 * degrees to radian
 */
export const DEG_TO_RAD = Math.PI / 180;
/**
 * Astronomical units to kilometers
 */
export const AU_TO_KM = 1.496e8;
/**
 * Gravitational constant in m^3.kg^−1.s^−2
 */
export const G = 6.6743e-11;
/**
 * in km
 */
export const SOLAR_SYSTEM_SIZE = 80 * AU_TO_KM;

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  constructor() {
    SOLAR_SYSTEM
      .filter((body) => body.id !== 'sun')
      .forEach(body => {
        body.trueAnomaly = body.meanAnomaly; // TODO
        body.position = this.getPositionForTrueAnomaly(body, body.trueAnomaly);
      });
  }

  /**
   * In px, relative to the sun at (0, 0)
   */
  public getOrbitEllipse(body: CelestialBody): Ellipse {
    // convert eccentricity and semi major axis to radius and position using
    // https://en.wikipedia.org/wiki/Ellipse#Standard_equation
    return {
      cx: body.orbitBody.position.x - (body.eccentricity * body.semiMajorAxis / KM_TO_PX),
      cy: body.orbitBody.position.y,
      rx: body.semiMajorAxis / KM_TO_PX,
      ry: Math.sqrt((body.semiMajorAxis ** 2) * (1 - (body.eccentricity ** 2))) / KM_TO_PX
    };
  }

  /**
   * Positions in px, relative to the sun at (0, 0)
   */
  public getOrbit(body: CelestialBody, nbPoints = 360): OrbitPoint[] {
    const result = d3.range(0, 360, 360 / nbPoints).map(trueAnomaly => {
      const point = this.getPositionForTrueAnomaly(body, trueAnomaly);
      return {
        trueAnomaly,
        x: point.x,
        y: point.y
      };
    });
    // add the body position to the orbit to make sure the orbit path will pass through the body:
    result.push({
      trueAnomaly: body.trueAnomaly,
      x: body.position.x,
      y: body.position.y
    });
    return result.sort((p1, p2) => p1.trueAnomaly - p2.trueAnomaly);
  }

  /**
   * in px, relative to the sun at (0, 0)
   */
  public getPositionForTrueAnomaly(body: CelestialBody, trueAnomaly): Point {
    const d = this.getDistanceToFocusPoint(body, trueAnomaly);
    // we convert the distance to a position using basic trigonometry :
    const yKm = d * Math.sin(trueAnomaly * DEG_TO_RAD);
    const xKm = d * Math.cos(trueAnomaly * DEG_TO_RAD);

    // we have the position relative to the orbited body, so we add its
    // position to have the absolute position (to the sun) of the orbiting body :
    return {
      x: (xKm / KM_TO_PX) + body.orbitBody.position.x,
      y: (yKm / KM_TO_PX) + body.orbitBody.position.y
    };
  }

  /**
   * https://en.wikipedia.org/wiki/Kepler_orbit#Development_of_the_laws
   * Focus point = the orbited body
   * @returns number distance the orbited body in km
   */
  public getDistanceToFocusPoint(body: CelestialBody, trueAnomaly: number): number {
    return (body.semiMajorAxis * (1 - (body.eccentricity ** 2))) / (1 + (body.eccentricity * Math.cos(trueAnomaly * DEG_TO_RAD)));
  }

  /**
   * https://en.wikipedia.org/wiki/Semi-major_and_semi-minor_axes#Orbital_period
   * @returns number in hours
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
