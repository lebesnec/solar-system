import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';

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
  orbitBody: null
};
