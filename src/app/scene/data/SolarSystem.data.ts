import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';
import {MERCURY} from './Mercury.data';
import {VENUS} from './Venus.data';
import {EARTH} from './Earth.data';
import {MARS} from './Mars.data';
import {
  AITNE, AOEDE, ARCHE,
  AUTONOE, CALLIRRHOE,
  CARME,
  CARPO, CHALDENE,
  CYLLENE,
  DIA, EIRENE,
  ERINOME,
  EUANTHE,
  EUKELADE,
  EUPHEME,
  EUPORIE,
  EURYDOME,
  HARPALYKE,
  HEGEMONE,
  HELIKE,
  HERMIPPE,
  HERSE,
  IOCASTE,
  ISONOE,
  JUPITER,
  KALE,
  KALLICHORE,
  KALYKE, KORE,
  LYSITHEA, MEGACLITE,
  MNEME,
  ORTHOSIE,
  PANDIA,
  PASIPHAE,
  PASITHEE,
  PHILOPHROSYNE,
  PRAXIDIKE,
  S_2003_J_10,
  S_2003_J_12,
  S_2003_J_16,
  S_2003_J_18,
  S_2003_J_19,
  S_2003_J_2, S_2003_J_23,
  S_2003_J_4, S_2003_J_9,
  S_2010_J_1,
  S_2010_J_2,
  S_2011_J_1, S_2011_J_2,
  S_2016_J_1, S_2017_J_1,
  S_2017_J_2,
  S_2017_J_3,
  S_2017_J_5,
  S_2017_J_6,
  S_2017_J_7,
  S_2017_J_8,
  S_2017_J_9, SINOPE,
  SPONDE,
  TAYGETE,
  THELXINOE,
  THEMISTO,
  THYONE,
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
  S_2003_J_12, S_2003_J_4, ERINOME, AITNE, HERSE, TAYGETE, S_2017_J_2, S_2017_J_6, EUKELADE, CARME, S_2003_J_19, ISONOE, S_2003_J_10,
  AUTONOE, PHILOPHROSYNE, CYLLENE, PASITHEE, S_2010_J_1, PASIPHAE, SPONDE, S_2017_J_8, EURYDOME, S_2017_J_5, KALYKE, HEGEMONE,
  KALE, KALLICHORE, S_2011_J_1, CHALDENE, ARCHE, EIRENE, KORE, S_2011_J_2, S_2003_J_9, MEGACLITE, AOEDE, S_2003_J_23, CALLIRRHOE,
  SINOPE, S_2017_J_1
];
