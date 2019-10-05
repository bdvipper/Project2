import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpParams } from '@angular/common/http'
import { Information } from './information';
import { APILogin } from './api-login';


@Injectable({
    providedIn: 'root'
})
export class TeamService{
    private api: string;
    private information: Information;

    constructor(private http:HttpClient){
        this.api="https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/team_stats_totals.json";
    }

    public async getInfoByTeam(name:string){


const one = new Promise<string>(resolve=> {
            this.http.get<Information>(this.api).subscribe(Response=>{
                console.log("This is the 'data'");
                console.log(Response);
                this.information=Response;
                resolve("working");
            });
        });
        await one.then(value=>{
            
        });
        console.log("THis it the info");
        console.log(this.information);
        return this.information;
    }
}