import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NzFormModule} from 'ng-zorro-antd/form'
import { NzInputModule } from 'ng-zorro-antd/input';
import {NzUploadModule} from 'ng-zorro-antd/upload'


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzTabsModule,
    NzFormModule,
    NzInputModule,
    NzUploadModule,
  ]
})
export class DashboardModule { }
