import { Component, OnInit } from '@angular/core';
import { TeamSelectedComponent } from './team-selected.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  
  constructor(private teamSelect :TeamSelectedComponent ) { }

  ngOnInit() {
  }

   teamSelected(name : string) {
    this.teamSelect.teamSelected(name);

  }
}
