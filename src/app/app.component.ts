import { Component, OnInit } from '@angular/core';
import { Information } from './home-page/information';
import { MediaAccount } from './home-page/media-account';
import { TeamService } from './home-page/team.service';
import { TeamSelectedComponent } from './home-page/team-selected.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  information:Information;
  name: string;
  stadium: string;
  accounts: MediaAccount[];
  teamSelect: TeamSelectedComponent;

  title = 'Snap Tackle Pop';

  constructor(private teamService: TeamService){
    this.teamSelect= new TeamSelectedComponent(teamService);
  }

  teamSelected(name: string){
    this.teamSelect.teamSelected(name).then(value=>{
      this.information=value;
      console.log(this.information);
      for(let i=0; i<this.information.teamStatsTotals.length; i++){
        if(this.information.teamStatsTotals[i].team.name==name){
          this.name=this.information.teamStatsTotals[i].team.city+" "+this.information.teamStatsTotals[i].team.name+" ("+this.information.teamStatsTotals[i].team.abbreviation+")";
          this.stadium="Home Stadium : "+this.information.teamStatsTotals[i].team.homeVenue.name;
          this.accounts=this.information.teamStatsTotals[i].team.socialMediaAccounts;
          console.log(this.accounts);
          
        }
      }
    })

    
  }

}
