import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductLedgerRoutingModule } from './product-ledger-routing.module';
import { ProductLedgerComponent } from './product-ledger.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ProductLedgerComponent
  ],
  imports: [
    CommonModule,
    ProductLedgerRoutingModule,
    SharedModuleModule
  ]
})
export class ProductLedgerModule { }
