import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
import { StaticPagesComponent } from './static-pages.component';
import { StaticpageDetalsComponent } from './staticpage-detals/staticpage-detals.component';

@NgModule({
  declarations: [
    StaticPagesComponent,
   
    StaticpageDetalsComponent,
 
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot(),
  ]
})
export class StaticPagesModule { }
