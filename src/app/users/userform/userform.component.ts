import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  user_job;
  user_name;
  constructor(public _userservice:UserServiceService) { }

  ngOnInit(): void {
  }

  //create user function
  adduser(form)
  {
    this._userservice.adduser(form.value).subscribe((res:any)=>{
      console.log(res.job);
    }) 
    form.reset();
  }

}
