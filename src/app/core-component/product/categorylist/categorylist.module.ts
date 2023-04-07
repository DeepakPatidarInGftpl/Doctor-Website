import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorylistRoutingModule } from './categorylist-routing.module';
import { CategorylistComponent } from './categorylist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { AddcategoryModule } from "../addcategory/addcategory.module";

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
@NgModule({
    declarations: [
        CategorylistComponent
    ],
    imports: [
        CommonModule,
        CategorylistRoutingModule,
        DataTablesModule,
        FormsModule,
        SweetAlert2Module.forRoot(),
        AddcategoryModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        OrderModule
    ]
})
export class CategorylistModule { }
