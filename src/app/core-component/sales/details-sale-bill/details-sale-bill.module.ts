import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsSaleBillRoutingModule } from './details-sale-bill-routing.module';
import { DetailsSaleBillComponent } from './details-sale-bill.component';


@NgModule({
  declarations: [
    DetailsSaleBillComponent
  ],
  imports: [
    CommonModule,
    DetailsSaleBillRoutingModule
  ]
})
export class DetailsSaleBillModule { }
