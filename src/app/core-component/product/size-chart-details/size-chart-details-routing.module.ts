import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SizeChartDetailsComponent } from './size-chart-details.component';

const routes: Routes = [
  {path:'',component:SizeChartDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SizeChartDetailsRoutingModule { }
