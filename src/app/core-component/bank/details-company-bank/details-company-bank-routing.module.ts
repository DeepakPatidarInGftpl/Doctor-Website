import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCompanyBankComponent } from './details-company-bank.component';

const routes: Routes = [
  {path:'',component:DetailsCompanyBankComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCompanyBankRoutingModule { }
