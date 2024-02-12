import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForcastingDashboardComponent } from './forcasting-dashboard.component';

const routes: Routes = [
  {path:'',component:ForcastingDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForcastingDashboardRoutingModule { }
