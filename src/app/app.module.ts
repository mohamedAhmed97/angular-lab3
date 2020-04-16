import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { UserServiceService } from './users/user-service.service';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,

  

  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
