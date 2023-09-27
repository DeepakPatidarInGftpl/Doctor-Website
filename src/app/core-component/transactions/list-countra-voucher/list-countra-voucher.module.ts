import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCountraVoucherRoutingModule } from './list-countra-voucher-routing.module';
import { ListCountraVoucherComponent } from './list-countra-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [ListCountraVoucherComponent],
  imports: [
    CommonModule,
    ListCountraVoucherRoutingModule,
    SharedModuleModule
  ]
})
export class ListCountraVoucherModule { }
