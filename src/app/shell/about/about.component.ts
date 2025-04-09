import { Component } from '@angular/core';
import { VERSION } from '../../../environments/version';
import { MatDialogTitle, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { TranslateModule } from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
    NgOptimizedImage,
  ],
})
export class AboutComponent {

  protected VERSION = VERSION;

  constructor() { }

}
