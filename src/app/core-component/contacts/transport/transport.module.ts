import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { TransportComponent } from '../transport/transport.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    TransportComponent
  ],
  imports: [
    CommonModule,
    TransportRoutingModule,
    
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSlideToggleModule
  ]
})
export class TransportModule { }
