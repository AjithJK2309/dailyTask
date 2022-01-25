import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sign-in' },
  {path : 'sign-in',component:SignInComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',loadChildren:()=>import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule)}
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
