import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseBillPaymentComponent } from './purchase-bill-payment.component';

const routes: Routes = [
  {
    path : '',
    component : PurchaseBillPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseBillPaymentRoutingModule { }
