import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';

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
  orbitBody: null
};
