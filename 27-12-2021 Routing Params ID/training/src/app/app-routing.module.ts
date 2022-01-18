import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './components/route1/route1.component';
import { Route2Component } from './components/route2/route2.component';
import { Route3Component } from './components/route3/route3.component';
import { ErrcomComponent } from './errcom/errcom.component';

const routes: Routes = [
  {path:'',component:Route1Component},
  {path:'route1',component:Route1Component},
  {path:'route2/:id',component:Route2Component},
  {path:'route3',component:Route3Component},
  {path:"**",component:ErrcomComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Route1Component,Route2Component,Route3Component];