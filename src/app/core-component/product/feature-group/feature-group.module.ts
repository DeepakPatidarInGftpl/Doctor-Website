import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureGroupRoutingModule } from './feature-group-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTablesModule } from 'angular-datatables';
import { FeatureGroupComponent } from './feature-group.component';

@NgModule({
  declarations: [FeatureGroupComponent],
  imports: [
    CommonModule,
    FeatureGroupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    DataTablesModule
  ]
})
export class FeatureGroupModule { }
