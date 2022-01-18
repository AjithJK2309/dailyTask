import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { TaskServiceService } from './task-service.service';
import { ServiceTaskComponent } from './service-task/service-task.component';
import { SimpleCrudComponent } from './simple-crud/simple-crud.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    PaymentFormComponent,
    ServiceTaskComponent,
    SimpleCrudComponent,
    ParentComponent,ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
