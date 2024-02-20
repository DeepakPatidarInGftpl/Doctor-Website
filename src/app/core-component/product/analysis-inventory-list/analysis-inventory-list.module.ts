import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisInventoryListRoutingModule } from './analysis-inventory-list-routing.module';
import { AnalysisInventoryListComponent } from './analysis-inventory-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnalysisInventoryListComponent
  ],
  imports: [
    CommonModule,
    AnalysisInventoryListRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AnalysisInventoryListModule { }
