import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialInwardRoutingModule } from './material-inward-routing.module';
import { MaterialInwardComponent } from './material-inward.component';

import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    MaterialInwardComponent
  ],
  imports: [
    CommonModule,
    MaterialInwardRoutingModule,
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
export class MaterialInwardModule { }
