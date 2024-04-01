import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsInvoiceAmountComponent } from './details-invoice-amount.component';

const routes: Routes = [
  {path:'',component:DetailsInvoiceAmountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsInvoiceAmountRoutingModule { }
