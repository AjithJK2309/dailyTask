import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NzFormModule} from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input';
import {NzUploadModule} from 'ng-zorro-antd/upload'
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzFormModule,
    NzInputModule,
    NzUploadModule,
    NzButtonModule
  ]
})
export class DashboardModule { }
