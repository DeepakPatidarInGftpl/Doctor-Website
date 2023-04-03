import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitConversionRoutingModule } from './unit-conversion-routing.module';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTablesModule } from 'angular-datatables';
import { UnitConversionComponent } from './unit-conversion.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    UnitConversionComponent
  ],
  imports: [
    CommonModule,
    UnitConversionRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class UnitConversionModule { }
