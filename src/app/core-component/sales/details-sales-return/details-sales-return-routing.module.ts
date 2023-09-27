import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsSalesReturnComponent } from './details-sales-return.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsSalesReturnComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_salereturn']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsSalesReturnRoutingModule { }
