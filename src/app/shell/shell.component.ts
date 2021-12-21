import {Component, OnInit} from '@angular/core';
import {SearchPanelService} from './search-panel/search-panel.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [
    trigger('panelAnimation', [
      transition( ':enter', [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
      ]),
      transition( ':leave', [
        animate(100, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ShellComponent implements OnInit {

  public showSearchPanel = false;
  public showSettingsPanel = false;

  constructor(
    public translate: TranslateService,
    private dialog: MatDialog,
    private searchPanelService: SearchPanelService
  ) {  }

  public ngOnInit(): void {
    this.searchPanelService.onBodySelected.subscribe(() => {
      this.showSearchPanel = false;
    });
  }

  public onLogoClick(): void {
    if (this.showSearchPanel) {
      this.showSearchPanel = false;
    } else {
      this.dialog.closeAll();
      this.searchPanelService.onBodySelected.next(null);
    }
  }

  public openSearchPanel(): void {
    this.dialog.closeAll();
    this.showSettingsPanel = false;
    this.showSearchPanel = true;
  }

  public onCloseClick(): void {
    this.dialog.closeAll();
    this.showSettingsPanel = false;
    this.showSearchPanel = false;
  }

  public openSettingsPanel(): void {
    this.dialog.closeAll();
    this.showSearchPanel = false;
    this.showSettingsPanel = true;
  }

}
