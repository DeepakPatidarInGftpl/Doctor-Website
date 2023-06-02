import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentTermsComponent } from './payment-terms.component';

const routes: Routes = [
  {path:'',component:PaymentTermsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTermsRoutingModule { }
