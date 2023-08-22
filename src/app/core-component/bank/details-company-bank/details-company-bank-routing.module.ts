import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCompanyBankComponent } from './details-company-bank.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsCompanyBankComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['view_companybank'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCompanyBankRoutingModule { }
