import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';

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
  orbitBody: null
};
