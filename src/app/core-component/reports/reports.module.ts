import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from '../reports/reports.component';
import { BalanceSheeetComponent } from './balance-sheeet/balance-sheeet.component';
import { TrialBalanceComponent } from './trial-balance/trial-balance.component';
import { TrialBalanceSheetComponent } from './trial-balance-sheet/trial-balance-sheet.component';


@NgModule({
  declarations: [
    ReportsComponent,
    TrialBalanceSheetComponent,
   
    
    ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
