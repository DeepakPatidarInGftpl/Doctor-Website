import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategorylistRoutingModule } from './subcategorylist-routing.module';
import { SubcategorylistComponent } from './subcategorylist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


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
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class SubcategorylistModule { }
