import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';

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
  orbitBody: null
};
