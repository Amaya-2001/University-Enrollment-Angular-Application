import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { StudentComponent } from './components/student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { CourseComponent } from './components/course/course.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    PagesComponent,
    StudentComponent,
    CourseComponent,
    EnrollmentComponent,
    NavbarComponent,



  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule,
    HttpClientModule
  ]
})
export class PagesModule { }
