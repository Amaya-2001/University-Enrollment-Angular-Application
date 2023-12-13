import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { StudentComponent } from './components/student/student.component';


const routes: Routes = [{ path: '', component: PagesComponent }, { path: 'student', component: StudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
