import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialYearDetailsRoutingModule } from './financial-year-details-routing.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { FinancialYearDetailsComponent } from './financial-year-details.component';


@NgModule({
  declarations: [
    FinancialYearDetailsComponent
  ],
  imports: [
    CommonModule,
    FinancialYearDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class FinancialYearDetailsModule { }
