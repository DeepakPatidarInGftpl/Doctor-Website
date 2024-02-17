import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleInvoiceComponent } from './sale-invoice.component';

const routes: Routes = [
  {path:'',component:SaleInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleInvoiceRoutingModule { }
