import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ListDeliveryChallanRoutingModule } from './list-delivery-challan-routing.module';
import { ListDeliveryChallanComponent } from './list-delivery-challan.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [ListDeliveryChallanComponent],
  imports: [
    CommonModule,
    ListDeliveryChallanRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers:[
    DatePipe
  ],
})
export class ListDeliveryChallanModule { }
