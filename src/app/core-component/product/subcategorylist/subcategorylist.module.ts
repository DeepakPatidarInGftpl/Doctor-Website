import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategorylistRoutingModule } from './subcategorylist-routing.module';
import { SubcategorylistComponent } from './subcategorylist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubcategorylistComponent
  ],
  imports: [
    CommonModule,
    SubcategorylistRoutingModule,
    DataTablesModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    DatepickerModule,
   
  ]
})
export class SubcategorylistModule { }
