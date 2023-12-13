import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgToastModule } from 'ng-angular-popup';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgToastModule,
    HttpClientModule


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
