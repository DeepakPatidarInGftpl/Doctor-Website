import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductionVoucherComponent } from './detail-production-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailProductionVoucherComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['view_productionvoucher'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailProductionVoucherRoutingModule { }
