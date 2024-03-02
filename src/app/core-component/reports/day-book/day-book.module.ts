import { NgModule } from '@angular/core';
import { DayBookRoutingModule } from './day-book-routing.module';
import { DayBookComponent } from './day-book.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown'
import { DataTablesModule } from 'angular-datatables';
import { FeatherModule } from 'angular-feather';
import { User, UserCheck, FileText, File } from 'angular-feather/icons';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {JsonPipe} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
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
  declarations: [DayBookComponent],
  imports: [
    CommonModule,
    DayBookRoutingModule,
    SharedModuleModule,
    FormsModule,ReactiveFormsModule,
    MatAutocompleteModule,NgFor,AsyncPipe,
    MatFormFieldModule,MatInputModule,NgMultiSelectDropDownModule,
    DataTablesModule,
    MatDatepickerModule,MatFormFieldModule,
    MatNativeDateModule,JsonPipe,MatSelectModule,
    NgChartsModule,
    SharedModuleModule,NgApexchartsModule,
    FeatherModule.pick(icons),
  ],
  exports: [
    FeatherModule
  ],
  providers:[
    DatePipe
  ]
})

 
export class DayBookModule { }
