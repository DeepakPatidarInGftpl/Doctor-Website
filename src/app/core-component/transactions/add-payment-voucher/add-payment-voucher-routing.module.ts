import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPaymentVoucherComponent } from './add-payment-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddPaymentVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_paymentvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPaymentVoucherRoutingModule { }
