import { Component } from '@angular/core';
import { MatDialogTitle, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    MatDialogTitle,
    CdkDrag,
    CdkDragHandle,
    MatIconButton,
    MatDialogClose,
    MatIcon,
    CdkScrollable,
    MatDialogContent,
    MatAnchor,
    TranslateModule,
  ],
})
export class ContactComponent {

  constructor() { }

}
