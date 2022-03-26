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
  longitudeOfAscendingNode: 110.299,
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
  longitudeOfAscendingNode: 80.3,
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
  longitudeOfAscendingNode: 35.951,
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
  longitudeOfAscendingNode: 79.620,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [ S_2015_1 ],
  orbitBody: null
};

export const HIIAKA: CelestialBody = {
  id: 'hiiaka',
  position: {
    x: 0,
    y: 0
  },
  mass: 1.79e19,
  radius: 160,
  semiMajorAxis: 49880,
  eccentricity: 0.0513,
  trueAnomaly: 0,
  meanAnomaly: 152.8,
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: null
};

export const NAMAKA: CelestialBody = {
  id: 'namaka',
  position: {
    x: 0,
    y: 0
  },
  mass: 1.79e18,
  radius: 85,
  semiMajorAxis: 25657,
  eccentricity: 0.249,
  trueAnomaly: 0,
  meanAnomaly: 178.5,
  type: CELESTIAL_BODY_TYPE.SATELLITE,
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
  longitudeOfAscendingNode: 122.167,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [ HIIAKA, NAMAKA ],
  orbitBody: null
};

export const VANTH: CelestialBody = {
  id: 'vanth',
  position: {
    x: 0,
    y: 0
  },
  mass: 3.6e19,
  radius: 475 / 2,
  semiMajorAxis: 8999.8,
  eccentricity: 0.00091,
  trueAnomaly: 0,
  meanAnomaly: 188.52,
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: null
};

export const ORCUS: CelestialBody = {
  id: 'orcus',
  position: {
    x: 0,
    y: 0
  },
  mass: 6.348e20,
  radius: 917 / 2,
  semiMajorAxis: 39.174 * 1.496e8,
  eccentricity: 0.22701,
  trueAnomaly: 0,
  meanAnomaly: 181.735,
  longitudeOfAscendingNode: 268.799,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [ VANTH ],
  orbitBody: null
};

export const WEYWOT: CelestialBody = {
  id: 'weywot',
  position: {
    x: 0,
    y: 0
  },
  mass: 1.40e21 / 2000,
  radius: 170 / 2,
  semiMajorAxis: 14500,
  eccentricity: 0.148,
  trueAnomaly: 0,
  meanAnomaly: 0, // TODO unknown
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: null
};

export const QUAOAR: CelestialBody = {
  id: 'quaoar',
  position: {
    x: 0,
    y: 0
  },
  mass: 1.40e21,
  radius: 1110 / 2,
  semiMajorAxis: 43.694 * 1.496e8,
  eccentricity: 0.04106,
  trueAnomaly: 0,
  meanAnomaly: 301.104,
  longitudeOfAscendingNode: 188.927,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [ WEYWOT ],
  orbitBody: null
};

export const XIANGLIU: CelestialBody = {
  id: 'xiangliu',
  position: {
    x: 0,
    y: 0
  },
  mass: 5e15, // TODO unknown
  radius: 100 / 2,
  semiMajorAxis: 24021,
  eccentricity: 0.2908,
  trueAnomaly: 0,
  meanAnomaly: 0, // TODO unknown
  type: CELESTIAL_BODY_TYPE.SATELLITE,
  satellites: [],
  orbitBody: null
};

export const GONGGONG: CelestialBody = {
  id: 'gonggong',
  position: {
    x: 0,
    y: 0
  },
  mass: 1.75e21,
  radius: 1230 / 2,
  semiMajorAxis: 67.485 * 1.496e8,
  eccentricity: 0.49943,
  trueAnomaly: 0,
  meanAnomaly: 106.496,
  longitudeOfAscendingNode: 336.8573,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [ XIANGLIU ],
  orbitBody: null
};

export const SEDNA: CelestialBody = {
  id: 'sedna',
  position: {
    x: 0,
    y: 0
  },
  mass: 1.8e21,
  radius: 1060 / 2,
  semiMajorAxis: 506 * 1.496e8,
  eccentricity: 0.8496,
  trueAnomaly: 0,
  meanAnomaly: 358.117,
  longitudeOfAscendingNode: 144.248,
  type: CELESTIAL_BODY_TYPE.DWARF_PLANET,
  satellites: [ ],
  orbitBody: null
};

export const DWARF_PLANETS = [ PLUTO, CERES, ERIS, MAKEMAKE, HAUMEA, ORCUS, QUAOAR, GONGGONG, SEDNA ];

DWARF_PLANETS.forEach(dwarfPlanet => {
  dwarfPlanet.satellites.forEach(satellite => satellite.orbitBody = dwarfPlanet);
});
