import {Component, OnInit} from '@angular/core';
import {SearchPanelService} from './search-panel/search-panel.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
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
