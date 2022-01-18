import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/app/guard/auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  
  {path:'',component:DashboardComponent,
  children: [
    {
      path:'',redirectTo:'task',pathMatch:'full'
    },
    {
      path: 'task', 
      component: TaskComponent
    },
    {
      path: 'project',
      component: ProjectComponent, 
      canActivate : [AuthGuardGuard]
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
