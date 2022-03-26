import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';

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
  longitudeOfAscendingNode: 48.331,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [],
  orbitBody: null
};
