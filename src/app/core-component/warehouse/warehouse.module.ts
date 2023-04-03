import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './warehouse.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { DataTablesModule } from "angular-datatables";
import { DatepickerModule } from "ng2-datepicker";


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  declarations: [
    WarehouseComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    SweetAlert2Module,
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class WarehouseModule { }
