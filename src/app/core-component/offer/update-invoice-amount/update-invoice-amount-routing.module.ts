import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateInvoiceAmountComponent } from './update-invoice-amount.component';

const routes: Routes = [
  {path:'',component:UpdateInvoiceAmountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateInvoiceAmountRoutingModule { }
