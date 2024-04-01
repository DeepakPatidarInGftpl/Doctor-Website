import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceAmountComponent } from './invoice-amount.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:InvoiceAmountComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_discount']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceAmountRoutingModule { }
