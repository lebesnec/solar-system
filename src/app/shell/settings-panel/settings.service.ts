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

  get orbitOn(): boolean {
    return localStorage.getItem('orbit') !== 'false';
  }
  set orbitOn(value: boolean) {
    localStorage.setItem('orbit', value ? 'true' : 'false');
  }

  constructor() { }

}
