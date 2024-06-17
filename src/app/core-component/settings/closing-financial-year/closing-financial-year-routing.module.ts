import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosingFinancialYearComponent } from './closing-financial-year.component';

const routes: Routes = [
  {
    path: '',
    component: ClosingFinancialYearComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosingFinancialYearRoutingModule { }
