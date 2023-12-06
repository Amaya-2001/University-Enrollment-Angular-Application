import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{ path: 'home', component: HomePageComponent }, { path: '', component: HomePageComponent }, { path: 'signup', component: UserSignupComponent },
{ path: 'login', component: UserLoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

