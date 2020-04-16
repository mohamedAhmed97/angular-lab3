import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  //user date
  @Input('userdata') user;
  //output
  @Output()userclick=new EventEmitter <string>();
  constructor() { }

  ngOnInit(): void {
  }

  //onclick function
  onClick()
  {
    this.userclick.emit(this.user);
  }

}
