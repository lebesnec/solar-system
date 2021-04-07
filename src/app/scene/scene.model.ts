export interface Point {
    x: number;
    y: number; 
}

export interface CelestialBody {
    position: Point, // km
    speed: number;
    orientation: number;
    mass: number; // kg
    radius: number; // km
    type: string;
}
