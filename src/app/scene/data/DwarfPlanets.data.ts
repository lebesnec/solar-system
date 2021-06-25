import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';

export const CHARON: CelestialBody = {
  id: 'charon',
  position: {
    x: 0,
    y: 0
  },
  speed: 0.21,
  mass: 1.586e21,
  radius: 606,
  semiMajorAxis: 19591.4,
  eccentricity: 0.0002,
  trueAnomaly: 0,
  meanAnomaly: 131.070,
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: null
};

export const STYX: CelestialBody = {
  id: 'styx',
  position: {
    x: 0,
    y: 0
  },
  speed: 0.21, // TODO unknown
  mass: 7.5e15,
  radius: 16 / 2,
  semiMajorAxis: 42656,
  eccentricity: 0.005787,
  trueAnomaly: 0,
  meanAnomaly: 194.546,
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: null
};

export const NIX: CelestialBody = {
  id: 'nix',
  position: {
    x: 0,
    y: 0
  },
  speed: 0.21, // TODO unknown
  mass: 4.5e16,
  radius: 49.8 / 2,
  semiMajorAxis: 48694,
  eccentricity: 0.002036,
  trueAnomaly: 0,
  meanAnomaly: 284.405,
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: null
};

export const KERBEROS: CelestialBody = {
  id: 'kerberos',
  position: {
    x: 0,
    y: 0
  },
  speed: 0.21, // TODO unknown
  mass: 4.65e16,
  radius: 19 / 2,
  semiMajorAxis: 57783,
  eccentricity: 0.00328,
  trueAnomaly: 0,
  meanAnomaly: 161.061,
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: null
};

export const HYDRA: CelestialBody = {
  id: 'hydra',
  position: {
    x: 0,
    y: 0
  },
  speed: 0.21, // TODO unknown
  mass: 4.8e16,
  radius: 50.9 / 2,
  semiMajorAxis: 64738,
  eccentricity: 0.005862,
  trueAnomaly: 0,
  meanAnomaly: 326.678,
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: null
};

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
  satellites: [ CHARON, STYX, NIX, KERBEROS, HYDRA ],
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

export const DYSNOMIA: CelestialBody = {
  id: 'dysnomia',
  position: {
    x: 0,
    y: 0
  },
  speed: 0.21, // TODO unknown
  mass: 1.27 * 1.303e22,
  radius: 700,
  semiMajorAxis: 37273,
  eccentricity: 0.0062,
  trueAnomaly: 0,
  meanAnomaly: 328.6,
  type: CELESTIAL_BODY_TYPE.SATELLITE,
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
  satellites: [ DYSNOMIA ], 
  orbitBody: null
};

export const S_2015_1: CelestialBody = {
  id: 'S_2015_1',
  position: {
    x: 0,
    y: 0
  },
  speed: 0.21, // TODO unknown
  mass: 5e15, // TODO unknown
  radius: 87.5,
  semiMajorAxis: 21000,
  eccentricity: 0, // TODO unknown
  trueAnomaly: 0,
  meanAnomaly: 0, // TODO unknown
  type: CELESTIAL_BODY_TYPE.SATELLITE,
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
  satellites: [ S_2015_1 ], 
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

DWARF_PLANETS.forEach(dwarfPlanet => {
  dwarfPlanet.satellites.forEach(satellite => satellite.orbitBody = dwarfPlanet);
});
