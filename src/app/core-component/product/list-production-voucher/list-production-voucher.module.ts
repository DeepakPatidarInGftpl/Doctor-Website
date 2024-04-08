import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductionVoucherRoutingModule } from './list-production-voucher-routing.module';
import { ListProductionVoucherComponent } from './list-production-voucher.component';


@NgModule({
  declarations: [ListProductionVoucherComponent],
  imports: [
    CommonModule,
    ListProductionVoucherRoutingModule
  ]
})
export class ListProductionVoucherModule { }
