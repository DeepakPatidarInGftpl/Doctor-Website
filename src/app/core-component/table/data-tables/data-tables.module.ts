import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesRoutingModule } from './data-tables-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { DataTablesComponent } from './data-tables.component';

import { NgxBarcodeModule } from 'ngx-barcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DataTablesComponent
  ],
  imports: [
    CommonModule,
    DataTablesRoutingModule,
    DataTablesModule,
    NgxBarcodeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DataTableSModule { }
