import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import {CookieService} from 'ngx-cookie-service';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { AuthGuardGuard } from 'src/app/guard/auth-guard.guard';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { InterceptorService } from 'src/app/services/interceptor.service';


@NgModule({
  declarations: [
    DashboardComponent,
    TaskComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiServiceService,AuthServiceService,AuthGuardGuard,CookieService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass : InterceptorService,
      multi:true
    }],
})
export class DashboardModule { }
