import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseServiceService {

  constructor(private _http:HttpClient) { }
  //course item 
  private courseitem=new BehaviorSubject(null);
  //api url
  Api_url="https://afternoon-falls-30227.herokuapp.com/api/v1/courses";
  Post_url="https://afternoon-falls-30227.herokuapp.com/api/v1/courses";
  //function of get courses
  getcourses(){
   /* return this.Courses; */
   return this._http.get(this.Api_url); 
  }
  //add course
  addcourse(course)
  {
    return this._http.post(this.Post_url, course);
  }
  // add data items to other component
  setItemData(data) {
      this.courseitem.next(data);
   }

   //return data
   getItemData()
   {
     return this.courseitem.asObservable();
   }
  
}
