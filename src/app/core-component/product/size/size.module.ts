import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizeRoutingModule } from './size-routing.module';
import { SizeComponent } from './size.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTablesModule } from 'angular-datatables';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    SizeComponent
  ],
  imports: [
    CommonModule,
    SizeRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule
  ]
})
export class SizeModule { }
