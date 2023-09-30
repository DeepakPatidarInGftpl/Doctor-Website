import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountraVoucherComponent } from './list-countra-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListCountraVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_countravoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCountraVoucherRoutingModule { }
