import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseServiceService } from './course-service.service';
import { CourseDetailsComponent } from './course-details/course-details.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [CoursesComponent, CourseListComponent, CourseItemComponent, CourseFormComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule ,
    HttpClientModule,
  ],
  providers: [CourseServiceService],
})
export class CoursesModule { }
