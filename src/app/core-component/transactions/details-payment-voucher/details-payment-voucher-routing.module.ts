import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPaymentVoucherComponent } from './details-payment-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsPaymentVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_paymentvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPaymentVoucherRoutingModule { }
