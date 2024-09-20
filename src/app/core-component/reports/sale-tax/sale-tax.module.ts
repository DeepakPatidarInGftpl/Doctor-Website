import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleTaxRoutingModule } from './sale-tax-routing.module';
import { SaleTaxComponent } from './sale-tax.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    SaleTaxComponent
  ],
  imports: [
    CommonModule,
    SaleTaxRoutingModule,
    SharedModuleModule,
    DataTablesModule,
    MatDatepickerModule,MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class SaleTaxModule { }
