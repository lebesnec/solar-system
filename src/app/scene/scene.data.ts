import { CelestialBody, CELESTIAL_BODY_TYPE } from './scene.model';

/**
 * SVG does not work well with big number so we have to divide each value
 * (in km) by this ratio before drawing. SCG also doesn't have much decimal
 * precision so we can't have a to big ratio or small bodies won't render well.
 * This does NOT take into account the scale applied by the current zoom!
 * https://oreillymedia.github.io/Using_SVG/extras/ch08-precision.html
 */
export const KM_TO_PX = 1e2;

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

export const SUN: CelestialBody = {
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
  meanAnomaly: 0,
  type: CELESTIAL_BODY_TYPE.STAR,
  satellites: [],
  orbitBody: null
};

export const MERCURY: CelestialBody = {
  id: 'mercury',
  position: {
    x: 0,
    y: 0
  },
  speed: 47.36,
  mass: 3.3011e23,
  radius: 2440,
  semiMajorAxis: 57909050,
  eccentricity: 0.20563,
  trueAnomaly: 0,
  meanAnomaly: 174.796,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [],
  orbitBody: SUN
};

export const VENUS: CelestialBody = {
  id: 'venus',
  position: {
    x: 0,
    y: 0
  },
  speed: 35.02,
  mass: 4.8675e24,
  radius: 6051.8,
  semiMajorAxis: 108208000,
  eccentricity: 0.006772,
  trueAnomaly: 0,
  meanAnomaly: 	50.115,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [],
  orbitBody: SUN
};

export const EARTH: CelestialBody = {
  id: 'earth',
  position: {
    x: 0,
    y: 0
  },
  speed: 29.78,
  mass: 5.97237e24,
  radius: 6371,
  semiMajorAxis: 149598023,
  eccentricity: 0.0167086,
  trueAnomaly: 0,
  meanAnomaly: 358.617,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [],
  orbitBody: SUN
};

export const MOON: CelestialBody = {
  id: 'moon',
  position: {
    x: 0,
    y: 0
  },
  speed: 1.022,
  mass: 7.342e22,
  radius: 1737.4,
  semiMajorAxis: 384399,
  eccentricity: 0.0549,
  trueAnomaly: 0,
  meanAnomaly: 0, // TODO
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: EARTH
};

export const MARS: CelestialBody = {
  id: 'mars',
  position: {
    x: 0,
    y: 0
  },
  speed: 24.007,
  mass: 6.4171e23,
  radius: 3389.5,
  semiMajorAxis: 227939200,
  eccentricity: 0.0934,
  trueAnomaly: 0,
  meanAnomaly: 19.412,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [],
  orbitBody: SUN
};

export const PHOBOS: CelestialBody = {
  id: 'phobos',
  position: {
    x: 0,
    y: 0
  },
  speed: 2.138,
  mass: 1.0659e16,
  radius: 11.2667,
  semiMajorAxis: 9376,
  eccentricity: 0.0151,
  trueAnomaly: 0,
  meanAnomaly: 0, // TODO
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: MARS
};

export const DEIMOS: CelestialBody = {
  id: 'deimos',
  position: {
    x: 0,
    y: 0
  },
  speed: 1.3513,
  mass: 1.4762e15,
  radius: 6.2,
  semiMajorAxis: 23463.2,
  eccentricity: 0.00033,
  trueAnomaly: 0,
  meanAnomaly: 90, // TODO
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: MARS
};

export const JUPITER: CelestialBody = {
  id: 'jupiter',
  position: {
    x: 0,
    y: 0
  },
  speed: 13.07,
  mass: 1.8982e27,
  radius: 69911,
  semiMajorAxis: 778570000,
  eccentricity: 0.0489,
  trueAnomaly: 0,
  meanAnomaly: 20.020,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [],
  orbitBody: SUN
};

export const SATURN: CelestialBody = {
  id: 'saturn',
  position: {
    x: 0,
    y: 0
  },
  speed: 9.68,
  mass: 5.6834e26,
  radius: 58232,
  semiMajorAxis: 1433530000,
  eccentricity: 0.0565,
  trueAnomaly: 0,
  meanAnomaly: 317.020,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [],
  orbitBody: SUN
};

export const URANUS: CelestialBody = {
  id: 'uranus',
  position: {
    x: 0,
    y: 0
  },
  speed: 6.80,
  mass: 8.6810e25,
  radius: 25362,
  semiMajorAxis: 2875040000,
  eccentricity: 0.046381,
  trueAnomaly: 0,
  meanAnomaly: 142.2386,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [],
  orbitBody: SUN
};

export const NEPTUNE: CelestialBody = {
  id: 'neptune',
  position: {
    x: 0,
    y: 0
  },
  speed: 5.43,
  mass: 1.02413e26,
  radius: 24622,
  semiMajorAxis: 4500000000,
  eccentricity: 0.008678,
  trueAnomaly: 0,
  meanAnomaly: 256.228,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [],
  orbitBody: SUN
};

SUN.satellites = [ MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE ];
EARTH.satellites = [ MOON ];
MARS.satellites = [ PHOBOS, DEIMOS ];

export const SOLAR_SYSTEM: CelestialBody[] = [ SUN, MERCURY, VENUS, EARTH, MOON, MARS, PHOBOS, DEIMOS, JUPITER, SATURN, URANUS, NEPTUNE ];
