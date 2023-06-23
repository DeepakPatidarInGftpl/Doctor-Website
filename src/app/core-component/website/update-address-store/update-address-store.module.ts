import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAddressStoreRoutingModule } from './update-address-store-routing.module';
import { UpdateAddressStoreComponent } from './update-address-store.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UpdateAddressStoreComponent],
  imports: [
    CommonModule,
    UpdateAddressStoreRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdateAddressStoreModule { }
