import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductionVoucherRoutingModule } from './list-production-voucher-routing.module';
import { ListProductionVoucherComponent } from './list-production-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [ListProductionVoucherComponent],
  imports: [
    CommonModule,
    ListProductionVoucherRoutingModule,
    SharedModuleModule
  ]
})
export class ListProductionVoucherModule { }
