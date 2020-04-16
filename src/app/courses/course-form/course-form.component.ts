import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  instructor;
  title;
  constructor(private _courseservice:CourseServiceService) { }

  ngOnInit(): void {
  }
  coursesubmit(form)
  {

    this._courseservice.addcourse(form.value).subscribe((res:any)=>{
      if(res.status==true)
      {
        console.log("Course Added")

      }
    }) 
 }

}
