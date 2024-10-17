import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllReportsRoutingModule } from './all-reports-routing.module';
import { AllReportsComponent } from './all-reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [AllReportsComponent], 
  imports: [
    CommonModule,
    AllReportsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModuleModule

  ]
})
export class AllReportsModule { }
