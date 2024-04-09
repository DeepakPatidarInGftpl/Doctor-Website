import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductionVoucherComponent } from './add-production-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddProductionVoucherComponent, canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['add_productionvoucher'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductionVoucherRoutingModule { }
