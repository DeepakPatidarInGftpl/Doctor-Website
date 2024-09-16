import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizeChartRoutingModule } from './size-chart-routing.module';
import { SizeChartComponent } from './size-chart.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    SizeChartComponent
  ],
  imports: [
    CommonModule,
    SizeChartRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SizeChartModule { }
