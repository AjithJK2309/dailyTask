import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormsModulee { }
