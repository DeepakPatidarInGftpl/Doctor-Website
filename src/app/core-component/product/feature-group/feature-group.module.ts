import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureGroupRoutingModule } from './feature-group-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTablesModule } from 'angular-datatables';
import { FeatureGroupComponent } from './feature-group.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [FeatureGroupComponent],
  imports: [
    CommonModule,
    FeatureGroupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class FeatureGroupModule { }
