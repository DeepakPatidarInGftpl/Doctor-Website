import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitylistRoutingModule } from './citylist-routing.module';
import { CitylistComponent } from './citylist.component';


import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CitylistComponent],
  imports: [
    CommonModule,
    CitylistRoutingModule,
    DataTablesModule,
    SweetAlert2Module.forRoot(),
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CitylistModule { }
