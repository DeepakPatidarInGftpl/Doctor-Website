import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SalesReturnListRoutingModule } from './sales-return-list-routing.module';
import { SalesReturnListComponent } from './sales-return-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    SalesReturnListComponent
  ],
  imports: [
    CommonModule,
    SalesReturnListRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers:[
    DatePipe
  ],
})
export class SalesReturnListModule { }
