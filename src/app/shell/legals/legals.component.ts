import { Component } from '@angular/core';
import { MatDialogTitle, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legals',
  templateUrl: './legals.component.html',
  styleUrls: ['./legals.component.scss'],
  imports: [
    MatDialogTitle,
    CdkDrag,
    CdkDragHandle,
    MatIconButton,
    MatDialogClose,
    MatIcon,
    CdkScrollable,
    MatDialogContent,
    TranslateModule,
  ],
})
export class LegalsComponent {

  protected currentYear = new Date().getFullYear();

  constructor() { }

}
