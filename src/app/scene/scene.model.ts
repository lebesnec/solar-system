export interface Point {
  x: number;
  y: number;
}

export enum LagrangePointId {
  L1 = 'l1',
  L2 = 'l2',
  L3 = 'l3',
  L4 = 'l4',
  L5 = 'l5'
}

export interface LagrangePoint extends Point {
  id: LagrangePointId;
}

export interface Ellipse {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

export interface OrbitPoint extends Point {
  trueAnomaly: number;
}

export enum CelestialBodyType {
  STAR = 'star',
  PLANET = 'planet',
  SATELLITE = 'satellite',
  DWARF_PLANET = 'dwarf_planet'
}

/**
 * position: px
 * speed: km/s
 * mass: kg
 * radius: km
 * semiMajorAxis: km
 * eccentricity: dimensionless (between 0 & 1)
 * trueAnomaly: degrees (between 0 & 360), counterclockwise
 * meanAnomaly: degrees (between 0 & 360), counterclockwise
 * longitudeOfAscendingNode: degrees (between 0 & 360), counterclockwise. The First Point of Aries is used as the origin of longitude.
 */
export interface CelestialBody {
  id: string;
  position: Point;
  speed?: number;
  mass: number;
  radius: number;
  semiMajorAxis: number;
  eccentricity: number;
  trueAnomaly: number;
  meanAnomaly: number;
  longitudeOfAscendingNode?: number;
  type: CelestialBodyType;
  satellites: CelestialBody[];
  orbitBody: CelestialBody | null;
  unknowData?: {
    speed?: boolean;
    mass?: boolean;
    radius?: boolean;
    semiMajorAxis?: boolean;
    eccentricity?: boolean;
    trueAnomaly?: boolean;
    meanAnomaly?: boolean;
    longitudeOfAscendingNode?: boolean;
  };
}

/**
 * degrees to radian
 */
export const DEG_TO_RAD = Math.PI / 180;

/**
 * Astronomical units to kilometers
 */
export const AU_TO_KM = 1.495978707e8;

/**
 * Kilometers to miles
 */
export const KM_TO_MILE = 0.621371;

/**
 * Kilograms to pounds
 */
export const KG_TO_POUND = 2.20462;

/**
 * Gravitational constant in m^3.kg^−1.s^−2
 */
export const G = 6.6743e-11;
