import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSalesReturnComponent } from './add-sales-return.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddSalesReturnComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_salereturn']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSalesReturnRoutingModule { }
