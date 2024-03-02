import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from '../reports/reports.component';
import { PendingSaleOrderComponent } from './pending-sale-order/pending-sale-order.component';

@NgModule({
  declarations: [
    ReportsComponent,
    PendingSaleOrderComponent,
    
    
    
    
    
    
    ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
