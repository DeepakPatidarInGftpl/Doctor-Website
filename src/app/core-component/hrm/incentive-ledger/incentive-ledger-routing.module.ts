import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncentiveLedgerComponent } from './incentive-ledger.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:IncentiveLedgerComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['view_incentiveledger'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncentiveLedgerRoutingModule { }
