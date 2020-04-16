import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'users',
   loadChildren: () => import('./users/users.module')
    .then(m => m.UsersModule)
   },
  { 
    path: 'course', 
    loadChildren: () => import('./courses/courses.module')
      .then(m => m.CoursesModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
