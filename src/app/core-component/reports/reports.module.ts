import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from '../reports/reports.component';
import { TimeWiseSaleComponent } from './time-wise-sale/time-wise-sale.component';

@NgModule({
  declarations: [
    ReportsComponent,
    TimeWiseSaleComponent,
    
    
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
