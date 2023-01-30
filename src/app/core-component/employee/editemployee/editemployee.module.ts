import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditemployeeRoutingModule } from './editemployee-routing.module';
import { EditemployeeComponent } from './editemployee.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditemployeeComponent
  ],
  imports: [
    CommonModule,
    EditemployeeRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditemployeeModule { }
