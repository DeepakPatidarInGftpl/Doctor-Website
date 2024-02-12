import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
 
  {path:'sales',loadChildren:()=>import('./sales-dashboard/sales-dashboard.module').then((m)=>m.SalesDashboardModule)},
  {path:'financial',loadChildren:()=>import('./financial-dashboard/financial-dashboard.module').then((m)=>m.FinancialDashboardModule)},
  {path:'forcasting',loadChildren:()=>import('./forcasting-dashboard/forcasting-dashboard.module').then((m)=>m.ForcastingDashboardModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }