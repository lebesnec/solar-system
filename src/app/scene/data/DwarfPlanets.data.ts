import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';

export const PLUTO: CelestialBody = {
  id: 'pluto',
  position: {
    x: 0,
    y: 0
  },
  speed: 4.743,
  mass: 1.303e22,
  radius: 1188,
  semiMajorAxis: 5.90638 * 1e9,
  eccentricity: 0.2488,
  trueAnomaly: 0,
  meanAnomaly: 14.53,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [], // TODO
  orbitBody: null
};

export const CERES: CelestialBody = {
  id: 'ceres',
  position: {
    x: 0,
    y: 0
  },
  speed: 17.905,
  mass: 9.3835e20,
  radius: 469.73,
  semiMajorAxis: 414261000,
  eccentricity: 0.07600902910,
  trueAnomaly: 0,
  meanAnomaly: 77.37209589,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [], 
  orbitBody: null
};

export const ERIS: CelestialBody = {
  id: 'eris',
  position: {
    x: 0,
    y: 0
  },
  speed: 3.434,
  mass: 1.6466e22,
  radius: 1163,
  semiMajorAxis: 67.864 * 1.496e8,
  eccentricity: 0.43607,
  trueAnomaly: 0,
  meanAnomaly: 205.989,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [], 
  orbitBody: null
};

export const MAKEMAKE: CelestialBody = {
  id: 'makemake',
  position: {
    x: 0,
    y: 0
  },
  speed: 4.419,
  mass: 3.1e21,
  radius: 739,
  semiMajorAxis: 45.430 * 1.496e8,
  eccentricity: 0.16126,
  trueAnomaly: 0,
  meanAnomaly: 165.514,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [], 
  orbitBody: null
};

export const HAUMEA: CelestialBody = {
  id: 'haumea',
  position: {
    x: 0,
    y: 0
  },
  speed: 4.531,
  mass: 4.006e21,
  radius: 798,
  semiMajorAxis: 43.116 * 1.496e8,
  eccentricity: 0.19642,
  trueAnomaly: 0,
  meanAnomaly: 218.205,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [], 
  orbitBody: null
};

export const DWARF_PLANETS = [ PLUTO, CERES, ERIS, MAKEMAKE, HAUMEA ];