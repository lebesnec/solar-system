import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CelestialBody} from '../scene.model';

@Component({
  selector: 'app-celestial-body-dialog',
  templateUrl: './celestial-body-dialog.component.html',
  styleUrls: ['./celestial-body-dialog.component.scss']
})
export class CelestialBodyDialogComponent implements OnInit {

  public body: CelestialBody;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: { body: CelestialBody }
  ) {
    this.body = data.body;
  }

  ngOnInit(): void {
  }

}
