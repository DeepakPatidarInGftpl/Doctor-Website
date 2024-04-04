import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListInvoiceAmountComponent } from './list-invoice-amount.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListInvoiceAmountComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_discount']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListInvoiceAmountRoutingModule { }
