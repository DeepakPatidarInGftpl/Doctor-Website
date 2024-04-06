import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PurchaseBillRoutingModule } from './purchase-bill-routing.module';
import { PurchaseBillComponent } from './purchase-bill.component';

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
    PurchaseBillComponent,
  ],
  imports: [
    CommonModule,
    PurchaseBillRoutingModule,
     DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule,
    MatProgressBarModule
  ],
  providers:[
    DatePipe
  ],
})
export class PurchaseBillModule { }
