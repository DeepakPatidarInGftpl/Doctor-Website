import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductionVoucherComponent } from './list-production-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListProductionVoucherComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['view_productionvoucher'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProductionVoucherRoutingModule { }
