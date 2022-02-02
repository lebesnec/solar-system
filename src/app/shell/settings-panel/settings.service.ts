import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  get gridOn(): boolean {
    return localStorage.getItem('grid') !== 'false';
  }
  set gridOn(value: boolean) {
    localStorage.setItem('grid', value ? 'true' : 'false');
  }

  get orbitsOn(): boolean {
    return localStorage.getItem('orbits') !== 'false';
  }
  set orbitsOn(value: boolean) {
    localStorage.setItem('orbits', value ? 'true' : 'false');
  }

  get labelsOn(): boolean {
    return localStorage.getItem('labels') !== 'false';
  }
  set labelsOn(value: boolean) {
    localStorage.setItem('labels', value ? 'true' : 'false');
  }

  constructor() { }

}
