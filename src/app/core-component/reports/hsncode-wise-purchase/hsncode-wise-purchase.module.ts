import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HsncodeWisePurchaseRoutingModule } from './hsncode-wise-purchase-routing.module';
import { HsncodeWisePurchaseComponent } from './hsncode-wise-purchase.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataTablesModule } from 'angular-datatables';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    HsncodeWisePurchaseComponent
  ],
  imports: [
    CommonModule,
    HsncodeWisePurchaseRoutingModule,
    SharedModuleModule,
    DataTablesModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class HsncodeWisePurchaseModule { }
