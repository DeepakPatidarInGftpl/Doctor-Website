import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleSummaryComponent } from './sale-summary.component';

const routes: Routes = [
  {
    path:'',component:SaleSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleSummaryRoutingModule { }
