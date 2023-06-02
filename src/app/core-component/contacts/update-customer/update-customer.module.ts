import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCustomerRoutingModule } from './update-customer-routing.module';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './update-customer.component';

@NgModule({
  declarations: [
    UpdateCustomerComponent
  ],
  imports: [
    CommonModule,
    UpdateCustomerRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdateCustomerModule { }
