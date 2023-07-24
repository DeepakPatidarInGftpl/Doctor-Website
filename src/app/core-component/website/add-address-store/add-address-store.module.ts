import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAddressStoreRoutingModule } from './add-address-store-routing.module';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAddressStoreComponent } from './add-address-store.component';

@NgModule({
  declarations: [AddAddressStoreComponent],
  imports: [
    CommonModule,
    AddAddressStoreRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddAddressStoreModule { }
