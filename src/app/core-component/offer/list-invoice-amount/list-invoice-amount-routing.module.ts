import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInvoiceAmountComponent } from './list-invoice-amount.component';

const routes: Routes = [
  {path:'',component:ListInvoiceAmountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListInvoiceAmountRoutingModule { }
