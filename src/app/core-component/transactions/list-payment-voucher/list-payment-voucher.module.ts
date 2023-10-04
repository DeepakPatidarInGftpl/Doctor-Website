import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPaymentVoucherRoutingModule } from './list-payment-voucher-routing.module';
import { ListPaymentVoucherComponent } from './list-payment-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ListPaymentVoucherComponent
  ],
  imports: [
    CommonModule,
    ListPaymentVoucherRoutingModule,
    SharedModuleModule
  ]
})
export class ListPaymentVoucherModule { }
