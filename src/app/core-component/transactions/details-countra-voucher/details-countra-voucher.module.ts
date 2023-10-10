import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCountraVoucherRoutingModule } from './details-countra-voucher-routing.module';
import { DetailsCountraVoucherComponent } from './details-countra-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    DetailsCountraVoucherComponent
  ],
  imports: [
    CommonModule,
    DetailsCountraVoucherRoutingModule,
    SharedModuleModule
  ]
})
export class DetailsCountraVoucherModule { }
