import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanylistRoutingModule } from './companylist-routing.module';
import { CompanylistComponent } from './companylist.component';

import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
@NgModule({
  declarations: [
    CompanylistComponent
  ],
  imports: [
    CommonModule,
    CompanylistRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot()
  ]
})
export class CompanylistModule { }
