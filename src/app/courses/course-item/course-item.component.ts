import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  constructor() { }
  @Input('coursedata')courses;
  @Output()coursedata=new EventEmitter<string>();
  ngOnInit(): void {
  }
  itemclick()
  {
    this.coursedata.emit();
  }
}
