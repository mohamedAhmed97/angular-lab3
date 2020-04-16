import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user;
  constructor(public _userservice:UserServiceService) { }

  ngOnInit(): void {
    this._userservice.userobserverdata.subscribe(data=>{
      this.user=data;
    })
  }

}
