import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandlistRoutingModule } from './brandlist-routing.module';
import { BrandlistComponent } from './brandlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSelectModule} from '@angular/material/select';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    BrandlistComponent
  ],
  imports: [
    CommonModule,
    BrandlistRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    DatepickerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSelectModule,
    MatSlideToggleModule
  ]
})
export class BrandlistModule { }
