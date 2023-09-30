import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateRecieptVoucherComponent } from './update-reciept-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateRecieptVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_receiptvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRecieptVoucherRoutingModule { }
