import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCountraVoucherComponent } from './update-countra-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateCountraVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_countravoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCountraVoucherRoutingModule { }
