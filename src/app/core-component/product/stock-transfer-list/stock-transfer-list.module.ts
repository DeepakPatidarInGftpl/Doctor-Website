import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockTransferListRoutingModule } from './stock-transfer-list-routing.module';
import { StockTransferListComponent } from './stock-transfer-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    StockTransferListComponent
  ],
  imports: [
    CommonModule,
    StockTransferListRoutingModule,
    SharedModuleModule
  ]
})
export class StockTransferListModule { }
