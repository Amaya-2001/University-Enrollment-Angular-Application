import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';


const routes: Routes = [{ path: '', component: PagesComponent },
{ path: 'student', component: StudentComponent },
{ path: 'course', component: CourseComponent },
{ path: 'enrollment', component: EnrollmentComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
