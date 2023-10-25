import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferRequestUpdateRoutingModule } from './stock-transfer-request-update-routing.module';
import { StockTransferRequestUpdateComponent } from './stock-transfer-request-update.component';


@NgModule({
  declarations: [
    StockTransferRequestUpdateComponent
  ],
  imports: [
    CommonModule,
    StockTransferRequestUpdateRoutingModule
  ]
})
export class StockTransferRequestUpdateModule { }
