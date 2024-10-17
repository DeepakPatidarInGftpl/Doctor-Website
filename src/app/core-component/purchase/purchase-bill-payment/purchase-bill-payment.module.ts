import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseBillPaymentRoutingModule } from './purchase-bill-payment-routing.module';
import { PurchaseBillPaymentComponent } from './purchase-bill-payment.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PurchaseBillPaymentComponent
  ],
  imports: [
    CommonModule,
    PurchaseBillPaymentRoutingModule,
    ReactiveFormsModule
  ],
  exports : [PurchaseBillPaymentComponent]
})
export class PurchaseBillPaymentModule { }
