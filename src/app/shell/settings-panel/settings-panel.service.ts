import { Injectable } from '@angular/core';

export enum ORBITS_SETTING {
  ALL = 'all',
  PLANET = 'planet',
  NONE = 'none'
}

@Injectable({
  providedIn: 'root'
})
export class SettingsPanelService {

  public get grid(): boolean {
    return localStorage.getItem('grid') !== 'false';
  }
  public set grid(value: boolean) {
    localStorage.setItem('grid', value ? 'true' : 'false');
  }

  public get orbits(): ORBITS_SETTING {
    const val = localStorage.getItem('orbits');
    console.log(val, val as ORBITS_SETTING);
    return val ? val as ORBITS_SETTING : ORBITS_SETTING.ALL;
  }
  public set orbits(value: ORBITS_SETTING) {
    localStorage.setItem('orbits', value);
  }

  public get labels(): boolean {
    return localStorage.getItem('labels') !== 'false';
  }
  public set labels(value: boolean) {
    localStorage.setItem('labels', value ? 'true' : 'false');
  }

  public get milkyWay(): boolean {
    return localStorage.getItem('milkyWay') !== 'false';
  }
  public set milkyWay(value: boolean) {
    localStorage.setItem('milkyWay', value ? 'true' : 'false');
  }

  constructor() { }

}
