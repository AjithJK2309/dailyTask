import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {path:'register',component:SigninComponent},
  {path:'',redirectTo:'register',pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'project/:user',loadChildren:()=>import('./components/dashboard/dashboard.module').then(mod=>mod.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
