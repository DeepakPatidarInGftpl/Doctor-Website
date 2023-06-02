import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchVariantProductListRoutingModule } from './batch-variant-product-list-routing.module';
import { BatchVariantProductListComponent } from './batch-variant-product-list.component';

import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    BatchVariantProductListComponent
  ],
  imports: [
    CommonModule,
    BatchVariantProductListRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule
  ]
})
export class BatchVariantProductListModule { }
