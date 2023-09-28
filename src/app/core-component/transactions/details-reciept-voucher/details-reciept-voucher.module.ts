import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRecieptVoucherRoutingModule } from './details-reciept-voucher-routing.module';
import { DetailsRecieptVoucherComponent } from './details-reciept-voucher.component';


@NgModule({
  declarations: [
    DetailsRecieptVoucherComponent
  ],
  imports: [
    CommonModule,
    DetailsRecieptVoucherRoutingModule
  ]
})
export class DetailsRecieptVoucherModule { }
