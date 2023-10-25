import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferDetailsRoutingModule } from './stock-transfer-details-routing.module';
import { StockTransferDetailsComponent } from './stock-transfer-details.component';


@NgModule({
  declarations: [
    StockTransferDetailsComponent
  ],
  imports: [
    CommonModule,
    StockTransferDetailsRoutingModule
  ]
})
export class StockTransferDetailsModule { }
