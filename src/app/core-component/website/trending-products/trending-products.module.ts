import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TrendingProductsRoutingModule } from './trending-products-routing.module';
import { TrendingProductsComponent } from './trending-products.component';

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
    TrendingProductsComponent
  ],
  imports: [
    CommonModule,
    TrendingProductsRoutingModule,
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
  ],
providers:[DatePipe]
})
export class TrendingProductsModule { }
