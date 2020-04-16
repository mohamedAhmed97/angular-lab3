import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  //users 
  users;
  constructor(public _userservice:UserServiceService) { }

  ngOnInit(): void {
    this._userservice.getusers().subscribe((res)=>{
      console.log(res['data']);
      this.users=res['data'];
    });
  }

  //functions
  //on user click
  onuserclick(data)
  {
    this._userservice.setuserdate(data);
    console.log("Data Setted in Service");
  }

}
