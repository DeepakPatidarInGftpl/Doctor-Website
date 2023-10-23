import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferRequestListRoutingModule } from './stock-transfer-request-list-routing.module';
import { StockTransferRequestListComponent } from './stock-transfer-request-list.component';


@NgModule({
  declarations: [
    StockTransferRequestListComponent
  ],
  imports: [
    CommonModule,
    StockTransferRequestListRoutingModule
  ]
})
export class StockTransferRequestListModule { }
