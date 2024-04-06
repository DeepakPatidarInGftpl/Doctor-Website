import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
  ],
  providers:[
    DatePipe
  ],
})
export class SalesReturnListModule { }
