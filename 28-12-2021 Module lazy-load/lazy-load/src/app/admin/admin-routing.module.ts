import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path:'adminDashboard',component:AdminComponent},
  {path:'adminDashboard/adminlist',component:AdminListComponent},
  {path:'adminDashboard/adminpage/:id',component:AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
