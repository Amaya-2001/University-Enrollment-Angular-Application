import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { CourseEditComponent } from './components/course/course.edit/course-edit/course-edit.component';
import { StudentEditComponent } from './components/student/student.edit/student.edit.component';
import { EnrollmentEditComponent } from './components/enrollment/enrollment.edit/enrollment-edit/enrollment-edit.component';


const routes: Routes = [{ path: '', component: PagesComponent },
{ path: 'student', component: StudentComponent },
{ path: 'course', component: CourseComponent },
{ path: 'enrollment', component: EnrollmentComponent },
{ path: 'course/edit/:courseId', component: CourseEditComponent },
{ path: 'course/:courseId', component: CourseComponent },
{ path: 'student/edit/:studentId', component: StudentEditComponent },
{ path: 'enrollment/edit/:enrollmentId', component: EnrollmentEditComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
