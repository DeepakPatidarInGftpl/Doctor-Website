import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCountraVoucherRoutingModule } from './details-countra-voucher-routing.module';
import { DetailsCountraVoucherComponent } from './details-countra-voucher.component';


@NgModule({
  declarations: [
    DetailsCountraVoucherComponent
  ],
  imports: [
    CommonModule,
    DetailsCountraVoucherRoutingModule
  ]
})
export class DetailsCountraVoucherModule { }
