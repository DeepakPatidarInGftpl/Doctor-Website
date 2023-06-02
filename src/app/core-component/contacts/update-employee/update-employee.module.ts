import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateEmployeeRoutingModule } from './update-employee-routing.module';
import { UpdateEmployeeComponent } from './update-employee.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    UpdateEmployeeRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdateEmployeeModule { }
