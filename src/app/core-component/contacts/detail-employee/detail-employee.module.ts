import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEmployeeRoutingModule } from './detail-employee-routing.module';
import { DetailEmployeeComponent } from './detail-employee.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DetailEmployeeComponent
  ],
  imports: [
    CommonModule,
    DetailEmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class DetailEmployeeModule { }
