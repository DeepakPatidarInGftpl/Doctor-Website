import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddVendorRoutingModule } from './add-vendor-routing.module';
import { AddVendorComponent } from './add-vendor.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AddVendorComponent
  ],
  imports: [
    CommonModule,
    AddVendorRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddVendorModule { }
