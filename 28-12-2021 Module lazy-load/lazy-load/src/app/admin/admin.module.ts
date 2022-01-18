import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminListComponent,
    AdminPageComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
