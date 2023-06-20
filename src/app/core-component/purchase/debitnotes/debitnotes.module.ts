import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebitnotesRoutingModule } from './debitnotes-routing.module';
import { DebitnotesComponent } from './debitnotes.component';

import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DatepickerModule } from 'ng2-datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    DebitnotesComponent
  ],
  imports: [
    CommonModule,
    DebitnotesRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule,
    MatProgressBarModule
  ]
})
export class DebitnotesModule { }
