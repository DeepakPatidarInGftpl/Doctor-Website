import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountlistRoutingModule } from './accountlist-routing.module';
import { AccountlistComponent } from './accountlist.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AccountlistComponent
  ],
  imports: [
    CommonModule,
    AccountlistRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class AccountlistModule { }
