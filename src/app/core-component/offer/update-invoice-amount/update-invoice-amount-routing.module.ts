import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateInvoiceAmountComponent } from './update-invoice-amount.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateInvoiceAmountComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_discount']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateInvoiceAmountRoutingModule { }
