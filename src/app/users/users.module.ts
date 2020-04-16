import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import {FormsModule} from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserformComponent } from './userform/userform.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserItemComponent, UserDetailsComponent, UserformComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
