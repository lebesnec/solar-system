export interface Point {
  x: number;
  y: number;
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

export enum CELESTIAL_BODY_TYPE {
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
  type: CELESTIAL_BODY_TYPE;
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
 * Gravitational constant in m^3.kg^−1.s^−2
 */
export const G = 6.6743e-11;
