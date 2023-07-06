import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionGroupRoutingModule } from './permission-group-routing.module';
import { PermissionGroupComponent } from './permission-group.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [
    PermissionGroupComponent
  ],
  imports: [
    CommonModule,
    PermissionGroupRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatProgressBarModule
  ]
})
export class PermissionGroupModule { }
