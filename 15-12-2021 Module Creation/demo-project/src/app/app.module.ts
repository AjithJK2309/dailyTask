import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { M1compoComponent } from './module1/m1compo/m1compo.component';
import { M2compoComponent } from './module2/m2compo/m2compo.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponentComponent,
    M1compoComponent,
    M2compoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
