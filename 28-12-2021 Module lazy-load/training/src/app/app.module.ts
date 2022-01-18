import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './parent2/child2/child2.component';
import { ChildComponent } from './parent/child/child.component';
import { StoreService } from './store.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Parent2Component,
    Child2Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
