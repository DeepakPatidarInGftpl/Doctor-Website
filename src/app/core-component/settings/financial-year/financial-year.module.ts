import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialYearRoutingModule } from './financial-year-routing.module';
import { FinancialYearComponent } from './financial-year.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [FinancialYearComponent],
  imports: [
    CommonModule,
    FinancialYearRoutingModule,
    SharedModuleModule
  ]
})
export class FinancialYearModule { }
