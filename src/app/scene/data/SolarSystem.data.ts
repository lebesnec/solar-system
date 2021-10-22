import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';
import {MERCURY} from './Mercury.data';
import {VENUS} from './Venus.data';
import {EARTH} from './Earth.data';
import {MARS} from './Mars.data';
import {
  CARPO,
  DIA, EUANTHE,
  EUPHEME,
  EUPORIE, HARPALYKE,
  HELIKE, HERMIPPE, IOCASTE,
  JUPITER,
  LYSITHEA, MNEME, ORTHOSIE,
  PANDIA, PRAXIDIKE, S_2003_J_12,
  S_2003_J_16,
  S_2003_J_18, S_2003_J_2,
  S_2010_J_2, S_2016_J_1, S_2017_J_3, S_2017_J_7, S_2017_J_9, THELXINOE,
  THEMISTO, THYONE,
  VALETUDO
} from './Jupiter.data';
import {SATURN} from './Saturn.data';
import {URANUS} from './Uranus.data';
import {NEPTUNE} from './Neptune.data';
import { DWARF_PLANETS } from './DwarfPlanets.data';

export const SUN: CelestialBody = {
  id: 'sun',
  symbol: '☉',
  position: {
    x: 0,
    y: 0
  },
  speed: 0,
  mass: 1.9885e30,
  radius: 696342,
  semiMajorAxis: 0,
  eccentricity: 0,
  trueAnomaly: 0,
  meanAnomaly: 0,
  type: CELESTIAL_BODY_TYPE.STAR,
  satellites: [ MERCURY, VENUS, EARTH, MARS, JUPITER, SATURN, URANUS, NEPTUNE ],
  orbitBody: null
};

export const SOLAR_SYSTEM: CelestialBody[] = [ SUN ];

SUN.satellites.forEach(satellite => {
  satellite.orbitBody = SUN;
  SOLAR_SYSTEM.push(satellite);
  satellite.satellites.forEach(moon => {
    SOLAR_SYSTEM.push(moon);
  });
});

DWARF_PLANETS.forEach(dwarfPlanet => {
  dwarfPlanet.orbitBody = SUN;
  SOLAR_SYSTEM.push(dwarfPlanet);
  dwarfPlanet.satellites.forEach(moon => {
    SOLAR_SYSTEM.push(moon);
  });
});

export const MISSING_PICTURES = [
  THEMISTO, PANDIA, LYSITHEA, DIA, CARPO, VALETUDO, EUPORIE, EUPHEME, S_2003_J_18, S_2010_J_2, HELIKE, S_2003_J_16, S_2003_J_2,
  EUANTHE, S_2017_J_7, HERMIPPE, PRAXIDIKE, THYONE, THELXINOE, S_2017_J_3, MNEME, S_2016_J_1, ORTHOSIE, HARPALYKE, IOCASTE, S_2017_J_9,
  S_2003_J_12
];
