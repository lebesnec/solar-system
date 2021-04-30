import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';

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
  orbitBody: null
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
  orbitBody: null
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
  satellites: [ PHOBOS, DEIMOS ],
  orbitBody: null
};

MARS.satellites.forEach(satellite => satellite.orbitBody = MARS);
