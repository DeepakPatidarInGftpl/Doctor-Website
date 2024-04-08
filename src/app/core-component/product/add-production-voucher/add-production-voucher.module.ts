import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductionVoucherRoutingModule } from './add-production-voucher-routing.module';
import { AddProductionVoucherComponent } from './add-production-voucher.component';


@NgModule({
  declarations: [
    AddProductionVoucherComponent
  ],
  imports: [
    CommonModule,
    AddProductionVoucherRoutingModule
  ]
})
export class AddProductionVoucherModule { }
