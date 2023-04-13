import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistRoutingModule } from './productlist-routing.module';
import { ProductlistComponent } from './productlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  declarations: [
    ProductlistComponent
  ],
  imports: [
    CommonModule,
    ProductlistRoutingModule,
    DataTablesModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule
  ]
})
export class ProductlistModule { }
