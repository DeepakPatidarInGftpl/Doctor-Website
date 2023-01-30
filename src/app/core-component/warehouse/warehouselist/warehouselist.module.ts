import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouselistRoutingModule } from './warehouselist-routing.module';
import { WarehouselistComponent } from './warehouselist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatepickerModule } from 'ng2-datepicker';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    WarehouselistComponent
  ],
  imports: [
    CommonModule,
    WarehouselistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    SweetAlert2Module,
    DataTablesModule
  ]
})
export class WarehouselistModule { }
