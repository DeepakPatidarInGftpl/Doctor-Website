import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressStoreRoutingModule } from './address-store-routing.module';
import { AddressStoreComponent } from './address-store.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [AddressStoreComponent],
  imports: [
    CommonModule,
    AddressStoreRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule,
    MatProgressBarModule
  ]
})
export class AddressStoreModule { }
