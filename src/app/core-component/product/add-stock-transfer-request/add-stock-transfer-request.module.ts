import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStockTransferRequestRoutingModule } from './add-stock-transfer-request-routing.module';
import { AddStockTransferRequestComponent } from './add-stock-transfer-request.component';


@NgModule({
  declarations: [
    AddStockTransferRequestComponent
  ],
  imports: [
    CommonModule,
    AddStockTransferRequestRoutingModule
  ]
})
export class AddStockTransferRequestModule { }
