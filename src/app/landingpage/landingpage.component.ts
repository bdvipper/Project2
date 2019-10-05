import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {

  user:User;

  constructor(private userService: UserService, private router: Router) { 
    this.user = new User();
  }

  login(){
    console.log(this.user);
    this.userService.login(this.user).subscribe(data=>{
      this.user=data;
      console.log(this.user);
    })
    
  }

}
