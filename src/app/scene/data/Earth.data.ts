import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';

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
  meanAnomaly: 135.27,
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: null
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
  longitudeOfAscendingNode: 0,
  type: CELESTIAL_BODY_TYPE.PLANET,
  satellites: [ MOON ],
  orbitBody: null
};

EARTH.satellites.forEach(satellite => satellite.orbitBody = EARTH);
