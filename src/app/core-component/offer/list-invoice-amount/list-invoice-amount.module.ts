import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListInvoiceAmountRoutingModule } from './list-invoice-amount-routing.module';
import { ListInvoiceAmountComponent } from './list-invoice-amount.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ListInvoiceAmountComponent
  ],
  imports: [
    CommonModule,
    ListInvoiceAmountRoutingModule,
    SharedModuleModule   
  ]
})
export class ListInvoiceAmountModule { }
