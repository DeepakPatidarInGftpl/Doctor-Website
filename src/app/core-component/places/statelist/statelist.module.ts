import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatelistRoutingModule } from './statelist-routing.module';
import { StatelistComponent } from './statelist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
  declarations: [
    StatelistComponent
  ],
  imports: [
    CommonModule,
    StatelistRoutingModule,
    DataTablesModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    DatepickerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class StatelistModule { }
