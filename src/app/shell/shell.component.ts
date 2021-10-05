import {Component, OnInit} from '@angular/core';
import {SearchPanelService} from './search-panel/search-panel.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  animations: [
    trigger('searchPanelAnimation', [
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

  constructor(
    private searchPanelService: SearchPanelService
  ) {  }

  public ngOnInit(): void {
    this.searchPanelService.onBodySelected.subscribe(() => {
      this.showSearchPanel = false;
    });
  }

}
