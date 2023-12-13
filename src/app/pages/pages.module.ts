import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { StudentComponent } from './components/student/student.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PagesComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule
  ]
})
export class PagesModule { }
