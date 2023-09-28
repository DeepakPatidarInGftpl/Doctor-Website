import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRecieptVoucherRoutingModule } from './list-reciept-voucher-routing.module';
import { ListRecieptVoucherComponent } from './list-reciept-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    ListRecieptVoucherComponent
  ],
  imports: [
    CommonModule,
    ListRecieptVoucherRoutingModule,
    SharedModuleModule
  ]
})
export class ListRecieptVoucherModule { }
