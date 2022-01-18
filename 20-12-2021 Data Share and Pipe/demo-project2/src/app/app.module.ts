import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sample } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';
import { AppendNum } from './custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Sample,
    Sample2Component,
    AppendNum
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
