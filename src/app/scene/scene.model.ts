export interface Point {
    x: number;
    y: number; 
}

export enum CELESTIAL_BODY_TYPE {
    SUN = 'sun',
    PLANET = 'planet',
    SATELLITE = 'satellite'
}

/**
 * position: km
 * speed: TODO
 * mass: kg
 * radius: km
 * semiMajorAxis: km
 * eccentricity: dimensionless, between 0 & 1
 * trueAnomaly: degrees, between 0 & 360
 */
export interface CelestialBody {
    position: Point,
    speed: number;
    mass: number;
    radius: number;
    semiMajorAxis: number;
    eccentricity: number;
    trueAnomaly: number;
    type: CELESTIAL_BODY_TYPE;
    satellites: CelestialBody[];
    orbitBody: CelestialBody | null
}
