import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private loginUrl:string;
private registerUrl:string;
  constructor(private http:HttpClient) { 
    this.loginUrl=" Snaptacklepop-env-1.dsrib2wypc.us-west-1.elasticbeanstalk.com/login";
    this.registerUrl=" Snaptacklepop-env-1.dsrib2wypc.us-west-1.elasticbeanstalk.com/register";
  }
public login(user:User){
  return this.http.post<User>(this.loginUrl,user);
}
public register(user:User){
  return this.http.post<User>(this.registerUrl,user);
}
}
