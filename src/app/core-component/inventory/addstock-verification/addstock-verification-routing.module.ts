import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstockVerificationComponent } from './addstock-verification.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddstockVerificationComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_stockverification']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddstockVerificationRoutingModule { }
