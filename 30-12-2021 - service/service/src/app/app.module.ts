import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Sib1Component } from './parent/sib1/sib1.component';
import { Sib2Component } from './parent/sib2/sib2.component';
import { GrandSib2Component } from './parent/sib2/grand-sib2/grand-sib2.component';
import { GrandSib1Component } from './parent/sib1/grand-sib1/grand-sib1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Sib1Component,
    Sib2Component,
    GrandSib2Component,
    GrandSib1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
