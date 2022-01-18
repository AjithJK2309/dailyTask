import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReadComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
