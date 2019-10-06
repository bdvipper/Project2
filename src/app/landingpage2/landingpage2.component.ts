import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage2',
  templateUrl: './landingpage2.component.html',
  styleUrls: ['./landingpage2.component.css']
})
export class Landingpage2Component {

  user:User;

  constructor(private userService: UserService, private router: Router) { 
    this.user = new User();
  }

  register(){
    console.log("test");
    console.log(this.user);
    this.userService.register(this.user).subscribe(data=>{
      this.user=data;
    })
  }

}