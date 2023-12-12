import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { StudentComponent } from './components/student/student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TokenInterceptor } from './interceptor/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserLoginComponent,
    UserSignupComponent,
    StudentComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule

  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
