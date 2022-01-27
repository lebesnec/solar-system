import { Component } from '@angular/core';

enum Section {
 ABOUT, CONTACT, SETTINGS, LEGALS
}

@Component({
  selector: 'app-settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.scss']
})
export class SettingsPanelComponent {

  public Section = Section;
  public currrentSection: Section = Section.SETTINGS;

  constructor() { }

}
