import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgToastModule } from 'ng-angular-popup';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgToastModule,
    ReactiveFormsModule,
    HttpClientModule,

  ]
})
export class AuthModule { }
