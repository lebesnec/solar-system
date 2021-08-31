import {CELESTIAL_BODY_TYPE, CelestialBody} from '../scene.model';
import {MERCURY} from './Mercury.data';
import {VENUS} from './Venus.data';
import {EARTH} from './Earth.data';
import {MARS} from './Mars.data';
import {JUPITER} from './Jupiter.data';
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