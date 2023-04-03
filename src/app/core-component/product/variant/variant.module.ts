import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantRoutingModule } from './variant-routing.module';
import { VariantComponent } from './variant.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTablesModule } from 'angular-datatables';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    VariantComponent
  ],
  imports: [
    CommonModule,
    VariantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class VariantModule { }
