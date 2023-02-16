import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandlistRoutingModule } from './brandlist-routing.module';
import { BrandlistComponent } from './brandlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    DatepickerModule
  ]
})
export class BrandlistModule { }
