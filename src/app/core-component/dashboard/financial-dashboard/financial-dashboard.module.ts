import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { FinancialDashboardRoutingModule } from './financial-dashboard-routing.module';
import { FinancialDashboardComponent } from './financial-dashboard.component';

import { DataTablesModule } from 'angular-datatables';
import { FeatherModule } from 'angular-feather';
import { User, UserCheck, FileText, File } from 'angular-feather/icons';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { JsonPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from "ng-apexcharts";
import { SharedModuleModule } from '../../shared-module/shared-module.module';
const icons = {
  User,
  UserCheck,
  FileText,
  File,
};
@NgModule({
  declarations: [
    FinancialDashboardComponent
  ],
  imports: [
    CommonModule,
    FinancialDashboardRoutingModule,
    DataTablesModule,
    FeatherModule.pick(icons),
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    JsonPipe,
    MatSelectModule,
    NgChartsModule,
    NgApexchartsModule
  ],
  exports: [
    FeatherModule
  ],
  providers: [
    DatePipe,
  ],
})
export class FinancialDashboardModule { }
