import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from '../reports/reports.component';
import { BalanceSheeetComponent } from './balance-sheeet/balance-sheeet.component';
import { TrialBalanceComponent } from './trial-balance/trial-balance.component';


@NgModule({
  declarations: [
    ReportsComponent,
   
    
    ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
