import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizeChartDetailsRoutingModule } from './size-chart-details-routing.module';
import { SizeChartDetailsComponent } from './size-chart-details.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    SizeChartDetailsComponent
  ],
  imports: [
    CommonModule,
    SizeChartDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class SizeChartDetailsModule { }
