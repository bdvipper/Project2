import { Component, OnInit } from '@angular/core';
import { TeamSelectedComponent } from './team-selected.component';
import { TeamService } from './team.service';
import { MediaAccount } from './media-account';
import { Information } from './information';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  teamSelect: TeamSelectedComponent;

  ngOnInit() {
  }

  information:Information;
  name : string;
  stadium: string;
  accounts: MediaAccount[];
  wins: number;
  losses: number;
  ties: number;
  record:string;
  passyds: string;
  rushyds: string;
  totalyds: string;
  ptsfor: string;
  ptsagainst: string;
  ptdiff: string; 
  logourl: string;
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
        this.wins=this.information.teamStatsTotals[i].stats.standings.wins;
        this.losses=this.information.teamStatsTotals[i].stats.standings.losses;
        this.ties=this.information.teamStatsTotals[i].stats.standings.ties;
        this.record="Record : "+this.wins+"-"+this.losses+"-"+this.ties;
        this.passyds= "Pass Yards : "+this.information.teamStatsTotals[i].stats.passing.passNetYards;
        this.rushyds=  "Rush Yards : "+this.information.teamStatsTotals[i].stats.rushing.rushYards;
        this.totalyds= "Total Yards : "+(this.information.teamStatsTotals[i].stats.passing.passNetYards+this.information.teamStatsTotals[i].stats.rushing.rushYards);
        this.ptsfor= "Points For : "+this.information.teamStatsTotals[i].stats.standings.pointsFor;
        this.ptsagainst= "Points Allowed : "+this.information.teamStatsTotals[i].stats.standings.pointsAgainst;
        this.ptdiff= "Point Differential : "+this.information.teamStatsTotals[i].stats.standings.pointDifferential;
        this.logourl= this.information.teamStatsTotals[i].team.officialLogoImageSrc;
        console.log(this.accounts);
        
      }
    }
    
  }



  //  teamSelected(name : string) {
  //    this.teamSelect= new TeamSelectedComponent(this.service);
  //    console.log("home page method called");
  //    this.teamSelect.teamSelected(name);
  //    console.log("Back to homepage");
  // // return faults;
  // }
}
