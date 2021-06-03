import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';

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
  meanAnomaly: 50.115,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [],
  orbitBody: null
};