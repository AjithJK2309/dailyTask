import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserPageComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
