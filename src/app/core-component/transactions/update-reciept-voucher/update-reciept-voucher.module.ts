import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRecieptVoucherRoutingModule } from './update-reciept-voucher-routing.module';
import { UpdateRecieptVoucherComponent } from './update-reciept-voucher.component';


@NgModule({
  declarations: [
    UpdateRecieptVoucherComponent
  ],
  imports: [
    CommonModule,
    UpdateRecieptVoucherRoutingModule
  ]
})
export class UpdateRecieptVoucherModule { }
