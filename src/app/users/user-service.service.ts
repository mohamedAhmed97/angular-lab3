import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersComponent } from './users.component';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class UserServiceService {
  //set varaible
  private userdate = new BehaviorSubject(null);
  constructor(public _http: HttpClient) { }
  /* users = [
    {
      id: 1,
      name: "mohamed"
    }
  ] */
  Api_url="https://reqres.in/api/users"
  //set function 
  setuserdate(data) {
    this.userdate.next(data);
  }
  //get user data
  get userobserverdata() {
    return this.userdate.asObservable();
  }
  //get user 
  getusers() {
    return this._http.get(this.Api_url);
    /* return this.users */
  }
  //add user
  adduser(user) {
    return this._http.post(this.Api_url, user)
  }
}

