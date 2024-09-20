import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HsncodeWiseSaleRoutingModule } from './hsncode-wise-sale-routing.module';
import { HsncodeWiseSaleComponent } from './hsncode-wise-sale.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataTablesModule } from 'angular-datatables';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    HsncodeWiseSaleComponent
  ],
  imports: [
    CommonModule,
    HsncodeWiseSaleRoutingModule,
    SharedModuleModule,
    DataTablesModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class HsncodeWiseSaleModule { }
