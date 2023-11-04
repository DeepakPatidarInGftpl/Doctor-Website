import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialYearDetailsComponent } from './financial-year-details.component';

const routes: Routes = [
  {path:'',component:FinancialYearDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialYearDetailsRoutingModule { }
