import { Component, Input } from '@angular/core';
import { MediaAccount } from './media-account';
import { Information } from './information';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team-selected',
  templateUrl: './team-selected.component.html',
  styleUrls: ['./team-selected.component.css']
})
export class TeamSelectedComponent {
  information:Information;
  @Input() name : string;
  stadium: string;
  accounts: MediaAccount[];
  constructor(private teamService: TeamService) { }

   async teamSelected(team:string) {
     console.log("team selected method called")
    const one = new Promise<string>((resolve, reject) => {
    this.teamService.teamSelected(team).then(valus=>{
        this.information=valus;
        console.log("This is the information");
        console.log(this.information);
        resolve('working');
      });
    })
    
    await one.then(value=>{

    });

    console.log("This is the Component")
    console.log(this.information);
    for(let i=0; i<this.information.teamStatsTotals.length; i++){
      if(this.information.teamStatsTotals[i].team.name==team){
        this.name=this.information.teamStatsTotals[i].team.city+" "+this.information.teamStatsTotals[i].team.name+" ("+this.information.teamStatsTotals[i].team.abbreviation+")";
        this.stadium="Home Stadium : "+this.information.teamStatsTotals[i].team.homeVenue.name;
        this.accounts=this.information.teamStatsTotals[i].team.socialMediaAccounts;
        console.log(this.accounts);
      }
    }
    
  }

}
