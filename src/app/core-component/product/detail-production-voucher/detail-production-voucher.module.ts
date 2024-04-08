import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProductionVoucherRoutingModule } from './detail-production-voucher-routing.module';
import { DetailProductionVoucherComponent } from './detail-production-voucher.component';


@NgModule({
  declarations: [
    DetailProductionVoucherComponent
  ],
  imports: [
    CommonModule,
    DetailProductionVoucherRoutingModule
  ]
})
export class DetailProductionVoucherModule { }
