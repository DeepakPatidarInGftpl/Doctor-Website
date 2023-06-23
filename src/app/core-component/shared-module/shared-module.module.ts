import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule,
    DataTablesModule,
    SweetAlert2Module
  ],
  exports:[
    CommonModule,
    RouterModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule,
    DataTablesModule,
    SweetAlert2Module
  ]
})
export class SharedModuleModule { }
