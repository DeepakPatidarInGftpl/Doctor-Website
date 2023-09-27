import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesReturnListRoutingModule } from './sales-return-list-routing.module';
import { SalesReturnListComponent } from './sales-return-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    SalesReturnListComponent
  ],
  imports: [
    CommonModule,
    SalesReturnListRoutingModule,
    SharedModuleModule
  ]
})
export class SalesReturnListModule { }
