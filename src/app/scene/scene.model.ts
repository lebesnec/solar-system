export interface Point {
    x: number;
    y: number;
}

export interface OrbitPoint extends Point {
    trueAnomaly: number;
}

export enum CELESTIAL_BODY_TYPE {
    STAR = 'star',
    PLANET = 'planet',
    SATELLITE = 'satellite',
    DWARF_PLANET = 'dwarf_planet'
}

/**
 * position: km
 * speed: km/s
 * mass: kg
 * radius: km
 * semiMajorAxis: km
 * eccentricity: dimensionless, between 0 & 1
 * trueAnomaly: degrees, between 0 & 360
 * meanAnomaly: degrees, between 0 & 360
 */
export interface CelestialBody {
    id: string;
    symbol?: string;
    position: Point;
    speed: number;
    mass: number;
    radius: number;
    semiMajorAxis: number;
    eccentricity: number;
    trueAnomaly: number;
    meanAnomaly: number;
    type: CELESTIAL_BODY_TYPE;
    satellites: CelestialBody[];
    orbitBody: CelestialBody | null;
}