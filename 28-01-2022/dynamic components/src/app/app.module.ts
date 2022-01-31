import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicAdsComponent } from './dynamic-ads/dynamic-ads.component';
import { AdsDynamic } from './dynamic-ads/ads.directive';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    DynamicAdsComponent,
    AdsDynamic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents:[AdsDynamic],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
