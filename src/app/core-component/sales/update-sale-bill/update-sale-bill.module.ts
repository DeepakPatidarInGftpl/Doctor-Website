import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateSaleBillRoutingModule } from './update-sale-bill-routing.module';
import { UpdateSaleBillComponent } from './update-sale-bill.component';


@NgModule({
  declarations: [
    UpdateSaleBillComponent
  ],
  imports: [
    CommonModule,
    UpdateSaleBillRoutingModule
  ]
})
export class UpdateSaleBillModule { }
