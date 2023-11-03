import {Injectable} from '@angular/core';
import {AU_TO_KM, CelestialBody, DEG_TO_RAD, Ellipse, LagrangePoint, LagrangePointType, OrbitPoint, Point} from './scene.model';
import * as d3 from 'd3';
import {SOLAR_SYSTEM, SUN} from './data/SolarSystem.data';
import {EARTH} from './data/Earth.data';

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
  public getOrbitEllipse(body: CelestialBody, scale: number): Ellipse {
    // convert eccentricity and semi major axis to radius and position using
    // https://en.wikipedia.org/wiki/Ellipse#Standard_equation
    return {
      cx: (body.orbitBody.position.x / scale) - ((body.eccentricity * body.semiMajorAxis) / scale),
      cy: body.orbitBody.position.y / scale,
      rx: body.semiMajorAxis / scale,
      ry: Math.sqrt((body.semiMajorAxis ** 2) * (1 - (body.eccentricity ** 2))) / scale
    };
  }

  /**
   * Positions in px, relative to the sun at (0, 0)
   */
  public getOrbitPath(body: CelestialBody, nbPoints: number, scale: number): OrbitPoint[] {
    const result = d3.range(0, 360, 360 / nbPoints).map(trueAnomaly => {
      const point = this.getPositionForTrueAnomaly(body, trueAnomaly);
      return {
        trueAnomaly,
        x: point.x / scale,
        y: point.y / scale
      };
    });
    // add the body position to the orbit to make sure the orbit path will pass through the body:
    result.push({
      trueAnomaly: body.trueAnomaly,
      x: body.position.x / scale,
      y: body.position.y / scale
    });
    return result.sort((p1, p2) => p1.trueAnomaly - p2.trueAnomaly);
  }

  /**
   * in km, relative to the sun at (0, 0)
   */
  public getPositionForTrueAnomaly(body: CelestialBody, trueAnomaly): Point {
    const d = this.getDistanceToFocusPoint(body, trueAnomaly);

    // we convert the distance to a position using trigonometry.
    // we have to negate the y position because in svg the origin is at the top left.
    const yKm = - d * Math.sin(trueAnomaly * DEG_TO_RAD);
    const xKm = d * Math.cos(trueAnomaly * DEG_TO_RAD);

    // we have the position relative to the orbited body, so we add its
    // position to have the absolute position (to the sun) of the orbiting body :
    return {
      x: xKm + body.orbitBody.position.x,
      y: yKm + body.orbitBody.position.y
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
   * https://en.wikipedia.org/wiki/Lagrange_point#Physical_and_mathematical_details
   * @returns LagrangePoints the 5 Lagrange points for the earth and sun (positions in px from the sun)
   */
  public getEarthLagrangePoints(scale: number): [ LagrangePoint, LagrangePoint, LagrangePoint, LagrangePoint, LagrangePoint ] {
    const earthPos = {
      x: EARTH.position.x / scale,
      y: EARTH.position.y / scale
    };

    // Pythagore give the earth-sun distance
    const distance = Math.sqrt((earthPos.x ** 2) + (earthPos.y ** 2));

    // Thales give us l1, l2 and l3 from r and the earth position
    let r = distance * Math.cbrt(EARTH.mass / (3 * SUN.mass));
    const l1: LagrangePoint = {
      x: (earthPos.x * (distance - r)) / distance,
      y: (earthPos.y * (distance - r)) / distance,
      type: LagrangePointType.L1
    };
    const l2: LagrangePoint = {
      x: (earthPos.x * (distance + r)) / distance,
      y: (earthPos.y * (distance + r)) / distance,
      type: LagrangePointType.L2
    };
    r = distance * ((7 * EARTH.mass) / (12 * SUN.mass));
    const l3: LagrangePoint = {
      x: - (earthPos.x * (distance - r)) / distance,
      y: - (earthPos.y * (distance - r)) / distance,
      type: LagrangePointType.L3
    };

    // 60° rotation of the earth position give l4
    const l4: LagrangePoint = {
      x: (earthPos.x * Math.cos(60 * DEG_TO_RAD)) + (earthPos.y * Math.sin(60 * DEG_TO_RAD)),
      y: - (earthPos.x * Math.sin(60 * DEG_TO_RAD)) + (earthPos.y * Math.cos(60 * DEG_TO_RAD)),
      type: LagrangePointType.L4
    };

    // -60° rotation of the earth position give l5
    const l5: LagrangePoint = {
      x: (earthPos.x * Math.cos(-60 * DEG_TO_RAD)) + (earthPos.y * Math.sin(-60 * DEG_TO_RAD)),
      y: - (earthPos.x * Math.sin(-60 * DEG_TO_RAD)) + (earthPos.y * Math.cos(-60 * DEG_TO_RAD)),
      type: LagrangePointType.L5
    };

    return [ l1, l2, l3, l4, l5 ];
  }

  /**
   * https://en.wikipedia.org/wiki/Semi-major_and_semi-minor_axes#Orbital_period
   * @returns number in hours
   */
  // public getOrbitalPeriod(body: CelestialBody): number {
  //   if (body.orbitBody) {
  //     // TODO > max_int
  //     return 2 * Math.PI * Math.sqrt(((body.semiMajorAxis * 1000) ** 3) / (G * body.orbitBody.mass)) / (60 * 60);
  //   } else {
  //     return 0;
  //   }
  // }

}
