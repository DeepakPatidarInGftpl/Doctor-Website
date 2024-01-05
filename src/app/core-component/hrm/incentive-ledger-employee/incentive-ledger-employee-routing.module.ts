import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncentiveLedgerEmployeeComponent } from './incentive-ledger-employee.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:IncentiveLedgerEmployeeComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_incentiveledger'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncentiveLedgerEmployeeRoutingModule { }
