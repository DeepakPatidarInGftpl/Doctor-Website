import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddemployeeRoutingModule } from './addemployee-routing.module';
import { AddemployeeComponent } from './addemployee.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddemployeeComponent
  ],
  imports: [
    CommonModule,
    AddemployeeRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddemployeeModule { }
