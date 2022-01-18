import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { ApiServiceService } from './services/api-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthServiceService } from './services/auth-service.service';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import {CookieService} from 'ngx-cookie-service';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiServiceService,AuthServiceService,AuthGuardGuard,CookieService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass : InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
