import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ListDeliveryChallanRoutingModule } from './list-delivery-challan-routing.module';
import { ListDeliveryChallanComponent } from './list-delivery-challan.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [ListDeliveryChallanComponent],
  imports: [
    CommonModule,
    ListDeliveryChallanRoutingModule,
    SharedModuleModule
  ],
  providers:[
    DatePipe
  ],
})
export class ListDeliveryChallanModule { }
