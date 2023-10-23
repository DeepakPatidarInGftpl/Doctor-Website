import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferListRoutingModule } from './stock-transfer-list-routing.module';
import { StockTransferListComponent } from './stock-transfer-list.component';


@NgModule({
  declarations: [
    StockTransferListComponent
  ],
  imports: [
    CommonModule,
    StockTransferListRoutingModule
  ]
})
export class StockTransferListModule { }
