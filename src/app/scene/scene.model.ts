export interface Point {
    x: number;
    y: number; 
}

export enum CELESTIAL_BODY_TYPE {
    SUN = 'sun',
    PLANET = 'planet',
    SATELLITE = 'satellite'
}

export interface CelestialBody {
    position: Point, // km
    speed: number;
    mass: number; // kg
    radius: number; // km
    semiMajorAxis: number; // km
    eccentricity: number; // dimensionless, between 0 & 1
    trueAnomaly: number; // degrees, between 0 & 360
    type: CELESTIAL_BODY_TYPE;
}
