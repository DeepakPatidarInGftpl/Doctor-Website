import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDepartmentRoutingModule } from './detail-department-routing.module';

import { SharedModuleModule } from '../../shared-module/shared-module.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DetailDepartmentComponent } from './detail-department.component';
@NgModule({
  declarations: [
    DetailDepartmentComponent
  ],
  imports: [
    CommonModule,
    DetailDepartmentRoutingModule,
    SharedModuleModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ]
})
export class DetailDepartmentModule { }
