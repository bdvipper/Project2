import { Component, OnInit } from '@angular/core';
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
  name: string;
  stadium: string;
  accounts: MediaAccount[];
  constructor(private teamService: TeamService) { }

   async teamSelected(team:string) {
    const one = new Promise<string>((resolve, reject) => {
    this.teamService.getInfoByTeam(team).then(valus=>{
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
    return this.information;
   
    
  }

}
