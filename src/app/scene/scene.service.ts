import { Injectable } from '@angular/core';
import { CelestialBody } from './scene.model';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  public readonly AU_TO_KM = 1.496e8;
  public readonly SOLAR_SYSTEM_SIZE = 1 * this.AU_TO_KM; // km TODO 80

  private solarSystem: CelestialBody[] = [
    {
      position: {
        x: 0,
        y: 0
      },
      speed: 0,
      orientation: 0,
      mass: 1.9885e30,
      radius: 696342,
      type: 'sun'
    }, {
      position: {
        x: 0,
        y: 147095000
      },
      speed: 29.78,
      orientation: 60,
      mass: 5.97237e24,
      radius: 6371,
      type: 'earth'
    }
  ];

  constructor() { }

  public getSolarSystem(): CelestialBody[] {
    return this.solarSystem;
  }

}
