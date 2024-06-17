import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosingFinancialYearRoutingModule } from './closing-financial-year-routing.module';
import { ClosingFinancialYearComponent } from './closing-financial-year.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ClosingFinancialYearComponent
  ],
  imports: [
    CommonModule,
    ClosingFinancialYearRoutingModule,
    SharedModuleModule
  ]
})
export class ClosingFinancialYearModule { }
