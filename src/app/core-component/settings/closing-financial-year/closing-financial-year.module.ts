import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosingFinancialYearRoutingModule } from './closing-financial-year-routing.module';
import { ClosingFinancialYearComponent } from './closing-financial-year.component';


@NgModule({
  declarations: [
    ClosingFinancialYearComponent
  ],
  imports: [
    CommonModule,
    ClosingFinancialYearRoutingModule
  ]
})
export class ClosingFinancialYearModule { }
