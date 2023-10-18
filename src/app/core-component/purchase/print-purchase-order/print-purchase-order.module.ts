import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintPurchaseOrderRoutingModule } from './print-purchase-order-routing.module';
import { PrintPurchaseOrderComponent } from './print-purchase-order.component';


@NgModule({
  declarations: [
    PrintPurchaseOrderComponent
  ],
  imports: [
    CommonModule,
    PrintPurchaseOrderRoutingModule
  ]
})
export class PrintPurchaseOrderModule { }
