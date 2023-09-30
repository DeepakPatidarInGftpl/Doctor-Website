import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecieptVoucherComponent } from './add-reciept-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{path:'',component:AddRecieptVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_receiptvoucher']}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRecieptVoucherRoutingModule { }
