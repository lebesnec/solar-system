import {Component, OnInit} from '@angular/core';
import {SearchPanelService} from './search-panel/search-panel.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';
import {MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';
import {SettingsComponent} from './settings/settings.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {LegalsComponent} from './legals/legals.component';

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
  public search = '';
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
      this.closeSearchPanel();
    });
    this.searchPanelService.onLagrangePointSelected.subscribe(() => {
      this.closeSearchPanel();
    });
  }

  public onLogoClick(): void {
    if (this.showSearchPanel) {
      this.closeSearchPanel();
    } else {
      this.dialog.closeAll();
      this.searchPanelService.onBodySelected.next(null);
    }
  }

  public openSearchPanel(): void {
    this.dialog.closeAll();
    this.showSearchPanel = true;
  }

  public closeSearchPanel(): void {
    this.search = '';
    this.showSearchPanel = false;
  }

  public onCloseClick(): void {
    this.dialog.closeAll();
    this.closeSearchPanel();
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
      autoFocus: false,
      minWidth: 450
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
