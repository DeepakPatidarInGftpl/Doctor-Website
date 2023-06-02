import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateVendorRoutingModule } from './update-vendor-routing.module';
import { UpdateVendorComponent } from './update-vendor.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UpdateVendorComponent
  ],
  imports: [
    CommonModule,
    UpdateVendorRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdateVendorModule { }
