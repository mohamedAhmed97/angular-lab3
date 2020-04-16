import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(public _courseservice:CourseServiceService) { }
  
  courses;
  ngOnInit(): void {
    this._courseservice.getcourses().subscribe((res)=>{
      this.courses=res['data'];
      
    });    
  }
  //return data
  itemclick(data)
  {
    this._courseservice.setItemData(data);
  }
}
