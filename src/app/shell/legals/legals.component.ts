import { Component } from '@angular/core';

@Component({
  selector: 'app-legals',
  templateUrl: './legals.component.html',
  styleUrls: ['./legals.component.scss'],
  standalone: false
})
export class LegalsComponent {

  public currentYear = new Date().getFullYear();

  constructor() { }

}
