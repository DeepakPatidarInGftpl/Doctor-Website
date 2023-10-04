import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPaymentVoucherComponent } from './list-payment-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListPaymentVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_paymentvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPaymentVoucherRoutingModule { }
