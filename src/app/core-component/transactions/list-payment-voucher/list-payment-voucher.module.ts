import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPaymentVoucherRoutingModule } from './list-payment-voucher-routing.module';
import { ListPaymentVoucherComponent } from './list-payment-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListPaymentVoucherComponent,
  ],
  imports: [
    CommonModule,
    ListPaymentVoucherRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
    // MatMomentDateModule
  ],
  providers :[]
})
export class ListPaymentVoucherModule { }
