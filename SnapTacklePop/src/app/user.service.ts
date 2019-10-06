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
    this.loginUrl="http://localhost:2525/login";
    this.registerUrl="http://localhost:2525/register";
  }
public login(user:User){
  return this.http.post<User>(this.loginUrl,user);
}
public register(user:User){
  return this.http.post<User>(this.registerUrl,user);
}
}
