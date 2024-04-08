import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SaleBillListRoutingModule } from './sale-bill-list-routing.module';
import { SaleBillListComponent } from './sale-bill-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    SaleBillListComponent
  ],
  imports: [
    CommonModule,
    SaleBillListRoutingModule,
    SharedModuleModule
  ],
  providers:[
    DatePipe
  ],
})
export class SaleBillListModule { }
