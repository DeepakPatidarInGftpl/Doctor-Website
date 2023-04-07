import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxSlabsRoutingModule } from './tax-slabs-routing.module';
import { TaxSlabsComponent } from './tax-slabs.component';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  declarations: [TaxSlabsComponent],
  imports: [
    CommonModule,
    TaxSlabsRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class TaxSlabsModule { }
