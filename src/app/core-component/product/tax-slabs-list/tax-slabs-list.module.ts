import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxSlabsListRoutingModule } from './tax-slabs-list-routing.module';
import { TaxSlabsListComponent } from './tax-slabs-list.component';

import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [TaxSlabsListComponent],
  imports: [
    CommonModule,
    TaxSlabsListRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module,
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ]
})
export class TaxSlabsListModule { }
