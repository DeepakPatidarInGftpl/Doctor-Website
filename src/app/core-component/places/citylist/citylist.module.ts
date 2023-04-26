import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitylistRoutingModule } from './citylist-routing.module';
import { CitylistComponent } from './citylist.component';


import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [CitylistComponent],
  imports: [
    CommonModule,
    CitylistRoutingModule,
    DataTablesModule,
    SweetAlert2Module.forRoot(),
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule
  ]
})
export class CitylistModule { }
