import { Component, OnInit, inject } from '@angular/core';
import {SearchPanelService} from './search-panel/search-panel.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
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
      transition(':enter', [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(100, style({ opacity: 0 }))
      ])
    ])
  ],
  standalone: false
})
export class ShellComponent implements OnInit {

  protected showSearchPanel = false;
  protected search = '';
  protected settingsDialog: MatDialogRef<SettingsComponent>;
  protected aboutDialog: MatDialogRef<AboutComponent>;
  protected contactDialog: MatDialogRef<ContactComponent>;
  protected legalsDialog: MatDialogRef<LegalsComponent>;

  protected translate = inject(TranslateService);
  private dialog = inject(MatDialog);
  private searchPanelService = inject(SearchPanelService);

  public ngOnInit(): void {
    this.searchPanelService.onBodySelected.subscribe(() => {
      this.closeSearchPanel();
    });
    this.searchPanelService.onLagrangePointSelected.subscribe(() => {
      this.closeSearchPanel();
    });
  }

  protected onLogoClick(): void {
    if (this.showSearchPanel) {
      this.closeSearchPanel();
    } else {
      this.dialog.closeAll();
      this.searchPanelService.onBodySelected.next(null);
    }
  }

  protected openSearchPanel(): void {
    this.dialog.closeAll();
    this.showSearchPanel = true;
  }

  protected closeSearchPanel(): void {
    this.search = '';
    this.showSearchPanel = false;
  }

  protected onCloseClick(): void {
    this.dialog.closeAll();
    this.closeSearchPanel();
  }

  protected openSettings(): void {
    this.closeDialogs();

    this.settingsDialog = this.dialog.open(SettingsComponent, {
      panelClass: 'settings-dialog-panel',
      closeOnNavigation: true,
      hasBackdrop: false,
      autoFocus: false
    });
  }

  protected openContact(): void {
    this.closeDialogs();

    this.contactDialog = this.dialog.open(ContactComponent, {
      panelClass: 'contact-dialog-panel',
      closeOnNavigation: true,
      hasBackdrop: false,
      autoFocus: false,
      minWidth: 450
    });
  }

  protected openAbout(): void {
    this.closeDialogs();

    this.aboutDialog = this.dialog.open(AboutComponent, {
      panelClass: 'about-dialog-panel',
      closeOnNavigation: true,
      hasBackdrop: false,
      autoFocus: false
    });
  }

  protected openLegals(): void {
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
