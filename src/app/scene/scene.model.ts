export interface Point {
    x: number;
    y: number; 
}

export interface CelestialBody {
    position: Point,
    speed: number;
    orientation: number;
    mass: number;
    radius: number;
    type: string;
}
