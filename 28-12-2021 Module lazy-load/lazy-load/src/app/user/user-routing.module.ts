import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {path:'userDashboard',component:UserComponent},
  {path:'userDashboard/userpage',component:UserPageComponent},
  {path:'userDashboard/userlist',component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
