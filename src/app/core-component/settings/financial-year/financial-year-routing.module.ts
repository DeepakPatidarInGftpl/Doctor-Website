import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialYearComponent } from './financial-year.component';

const routes: Routes = [{path:'',component:FinancialYearComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialYearRoutingModule { }
