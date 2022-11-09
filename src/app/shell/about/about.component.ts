import { Component } from '@angular/core';
import { VERSION } from '../../../environments/version';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public VERSION = VERSION;

  constructor() { }

}
