import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'edit',component:ReadComponent},
  {path:'create/:id',component:CreateComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
