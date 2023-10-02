import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCountraVoucherComponent } from './add-countra-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddCountraVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_countravoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCountraVoucherRoutingModule { }
