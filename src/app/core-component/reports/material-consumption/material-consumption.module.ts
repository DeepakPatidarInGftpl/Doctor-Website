import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialConsumptionRoutingModule } from './material-consumption-routing.module';
import { MaterialConsumptionComponent } from './material-consumption.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataTablesModule } from 'angular-datatables';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    MaterialConsumptionComponent
  ],
  imports: [
    CommonModule,
    MaterialConsumptionRoutingModule,
    SharedModuleModule,
    DataTablesModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class MaterialConsumptionModule { }
