import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentTermsDetailsComponent } from './payment-terms-details.component';

const routes: Routes = [
  {path:'',component:PaymentTermsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTermsDetailsRoutingModule { }
