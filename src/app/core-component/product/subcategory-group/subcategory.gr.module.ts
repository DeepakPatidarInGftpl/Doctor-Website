import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubcategoryGroupComponent } from './subcategory-group.component';
import { subCatRoutingModule } from './subcategory-group.routing.mudule';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    SubcategoryGroupComponent
  ],
  imports: [
    CommonModule,
    subCatRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule,
    MatSlideToggleModule
  ]
})
export class subcatModule { }
