import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetGraphRoutingModule } from './target-graph-routing.module';
import { TargetGraphComponent } from './target-graph.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    TargetGraphComponent
  ],
  imports: [
    CommonModule,
    TargetGraphRoutingModule,
    SharedModuleModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule, 
    NgChartsModule,
    NgApexchartsModule
  ]
})
export class TargetGraphModule { }
