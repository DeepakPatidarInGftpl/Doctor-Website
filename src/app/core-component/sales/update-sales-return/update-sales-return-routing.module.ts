import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSalesReturnComponent } from './update-sales-return.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:UpdateSalesReturnComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_salereturn']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateSalesReturnRoutingModule { }
