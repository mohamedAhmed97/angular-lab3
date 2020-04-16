import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private _courseservice:CourseServiceService) { }
  courseitem;
  ngOnInit(): void {
    this._courseservice.getItemData().subscribe((res)=>{
      this.courseitem=res;
    })
  }

}
