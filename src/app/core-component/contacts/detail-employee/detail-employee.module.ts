import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEmployeeRoutingModule } from './detail-employee-routing.module';
import { DetailEmployeeComponent } from './detail-employee.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    DetailEmployeeComponent
  ],
  imports: [
    CommonModule,
    DetailEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModuleModule,
    MatStepperModule,
    MatButtonModule
  ]
})
export class DetailEmployeeModule { }
