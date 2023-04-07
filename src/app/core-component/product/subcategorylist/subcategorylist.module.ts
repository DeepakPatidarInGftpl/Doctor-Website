import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategorylistRoutingModule } from './subcategorylist-routing.module';
import { SubcategorylistComponent } from './subcategorylist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    SubcategorylistComponent
  ],
  imports: [
    CommonModule,
    SubcategorylistRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class SubcategorylistModule { }
