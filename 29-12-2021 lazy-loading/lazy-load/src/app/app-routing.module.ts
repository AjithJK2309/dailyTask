import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';

const routes: Routes = [
  
  {path:'elements',component:ElementsComponent},
  {path:'collections',loadChildren:()=>import('./collections/collections.module').then(mod=>mod.CollectionsModule)},
  {path:'',redirectTo:'elements',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
