import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { StudentComponent } from './components/student/student.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';


const routes: Routes = [{ path: '', component: PagesComponent }, { path: 'student', component: StudentComponent },
{ path: 'create', component: CreateStudentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
