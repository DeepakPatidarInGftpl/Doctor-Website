import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferUpdateRoutingModule } from './stock-transfer-update-routing.module';
import { StockTransferUpdateComponent } from './stock-transfer-update.component';


@NgModule({
  declarations: [
    StockTransferUpdateComponent
  ],
  imports: [
    CommonModule,
    StockTransferUpdateRoutingModule
  ]
})
export class StockTransferUpdateModule { }
