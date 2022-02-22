import {Component, OnInit} from '@angular/core';
import {SearchPanelService} from './search-panel/search-panel.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SettingsComponent} from './settings-panel/settings/settings.component';
import {ContactComponent} from './settings-panel/contact/contact.component';
import {AboutComponent} from './settings-panel/about/about.component';
import {LegalsComponent} from './settings-panel/legals/legals.component';

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
  private settingsDialog: MatDialogRef<SettingsComponent>;
  private aboutDialog: MatDialogRef<AboutComponent>;
  private contactDialog: MatDialogRef<ContactComponent>;
  private legalsDialog: MatDialogRef<LegalsComponent>;

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
    this.showSearchPanel = true;
  }

  public onCloseClick(): void {
    this.dialog.closeAll();
    this.showSearchPanel = false;
  }

  public openSettings(): void {
    this.closeDialogs();

    this.settingsDialog = this.dialog.open(SettingsComponent, {
      panelClass: 'settings-dialog-panel',
      closeOnNavigation: true,
      hasBackdrop: false,
      autoFocus: false
    });
  }

  public openContact(): void {
    this.closeDialogs();

    this.contactDialog = this.dialog.open(ContactComponent, {
      panelClass: 'contact-dialog-panel',
      closeOnNavigation: true,
      hasBackdrop: false,
      autoFocus: false
    });
  }

  public openAbout(): void {
    this.closeDialogs();

    this.aboutDialog = this.dialog.open(AboutComponent, {
      panelClass: 'about-dialog-panel',
      closeOnNavigation: true,
      hasBackdrop: false,
      autoFocus: false
    });
  }

  public openLegals(): void {
    this.closeDialogs();

    this.legalsDialog = this.dialog.open(LegalsComponent, {
      panelClass: 'legals-dialog-panel',
      closeOnNavigation: true,
      hasBackdrop: false,
      autoFocus: false
    });
  }

  private closeDialogs(): void {
    if (this.settingsDialog) {
      this.settingsDialog.close();
    }
    if (this.contactDialog) {
      this.contactDialog.close();
    }
    if (this.aboutDialog) {
      this.aboutDialog.close();
    }
    if (this.legalsDialog) {
      this.legalsDialog.close();
    }
  }

}
