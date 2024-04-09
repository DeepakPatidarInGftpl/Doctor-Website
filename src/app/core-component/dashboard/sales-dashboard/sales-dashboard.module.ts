import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SalesDashboardRoutingModule } from './sales-dashboard-routing.module';
import { SalesDashboardComponent } from './sales-dashboard.component';
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
import { PipeModuleModule } from '../../product/pipe-module/pipe-module.module';
const icons = {
  User,
  UserCheck,
  FileText,
  File,
};

@NgModule({
  declarations: [
    SalesDashboardComponent
  ],
  imports: [
    CommonModule,
    SalesDashboardRoutingModule,
    DataTablesModule,
    FeatherModule.pick(icons),
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    JsonPipe,
    MatSelectModule,
    NgChartsModule,
    NgApexchartsModule,
    PipeModuleModule
  ],
   exports: [
    FeatherModule
  ],
  providers: [
    DatePipe,
  ],
})
export class SalesDashboardModule { }
