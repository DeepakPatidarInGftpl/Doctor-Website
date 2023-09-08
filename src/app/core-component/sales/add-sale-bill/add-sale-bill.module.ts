import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSaleBillRoutingModule } from './add-sale-bill-routing.module';
import { AddSaleBillComponent } from './add-sale-bill.component';


@NgModule({
  declarations: [
    AddSaleBillComponent
  ],
  imports: [
    CommonModule,
    AddSaleBillRoutingModule
  ]
})
export class AddSaleBillModule { }
