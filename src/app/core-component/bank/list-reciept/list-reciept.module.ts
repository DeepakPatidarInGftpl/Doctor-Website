import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRecieptRoutingModule } from './list-reciept-routing.module';
import { ListRecieptComponent } from './list-reciept.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ListRecieptComponent
  ],
  imports: [
    CommonModule,
    ListRecieptRoutingModule,
    SharedModuleModule
  ]
})
export class ListRecieptModule { }
