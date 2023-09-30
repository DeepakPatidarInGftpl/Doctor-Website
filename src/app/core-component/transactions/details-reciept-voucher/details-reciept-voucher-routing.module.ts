import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRecieptVoucherComponent } from './details-reciept-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsRecieptVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_receiptvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRecieptVoucherRoutingModule { }
