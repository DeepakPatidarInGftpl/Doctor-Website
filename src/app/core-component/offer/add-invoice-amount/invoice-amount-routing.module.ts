import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceAmountComponent } from './invoice-amount.component';

const routes: Routes = [
  {path:'',component:InvoiceAmountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceAmountRoutingModule { }
