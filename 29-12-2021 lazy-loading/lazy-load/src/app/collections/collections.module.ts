import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsListComponent } from './collections-list/collections-list.component';


@NgModule({
  declarations: [
    CollectionsListComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
