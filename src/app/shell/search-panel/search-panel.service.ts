import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {CelestialBody, LagrangePoint} from '../../scene/scene.model';

@Injectable({
  providedIn: 'root'
})
export class SearchPanelService {

  public onBodySelected: Subject<CelestialBody | null> = new Subject();
  public onLagrangePointSelected: Subject<LagrangePoint> = new Subject();

  constructor() { }

  /**
   * @param data the list of object to search in
   * @param fields the fields to search inside the objects
   * @param filter the string to search for
   */
  public filter<T extends object>(data: T[], fields: string[], filter: string): T[] {
    const search = this.toWords(filter);
    return data.filter((element: T) => this.match(element, fields, search));
  }

  /**
   * @return string the value without accented characters or extra space, in lower case
   */
  private normalize(value: string): string {
    if (value === null) {
      return '';
    }
    return value.normalize('NFD')
                .replace(/\p{Diacritic}/gu, '')
                .toLowerCase()
                .trim();
  }

  /**
   * @return string[] the text split into word and normalized
   */
  private toWords(text: string): string[] {
    return this.normalize(text).split(' ');
  }

  /**
   * @return boolean true if the object matche the search
   * @param object the object to search
   * @param fields the fields to search inside the object
   * @param words the words the search into the object
   */
  private match(object: object, fields: string[], words: string[]): boolean {
    return words.every((word) => {
      return fields.some((field) => {
        const value = this.normalize(object[field]);
        return value.includes(word);
      });
    });
  }

}
