import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCountraVoucherComponent } from './details-countra-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsCountraVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_countravoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCountraVoucherRoutingModule { }
