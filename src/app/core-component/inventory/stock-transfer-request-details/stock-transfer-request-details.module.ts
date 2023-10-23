import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferRequestDetailsRoutingModule } from './stock-transfer-request-details-routing.module';
import { StockTransferRequestDetailsComponent } from './stock-transfer-request-details.component';


@NgModule({
  declarations: [
    StockTransferRequestDetailsComponent
  ],
  imports: [
    CommonModule,
    StockTransferRequestDetailsRoutingModule
  ]
})
export class StockTransferRequestDetailsModule { }
