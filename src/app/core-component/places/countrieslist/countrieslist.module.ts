import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountrieslistRoutingModule } from './countrieslist-routing.module';
import { CountrieslistComponent } from './countrieslist.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DatepickerModule } from 'ng2-datepicker';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    CountrieslistComponent
  ],
  imports: [
    CommonModule,
    CountrieslistRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    DatepickerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class CountrieslistModule { }
