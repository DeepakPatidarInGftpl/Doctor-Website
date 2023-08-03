import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPurchaseRoutingModule } from './list-purchase-routing.module';
import { ListPurchaseComponent } from './list-purchase.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';



@NgModule({
  declarations: [ListPurchaseComponent],
  imports: [
    CommonModule,
    ListPurchaseRoutingModule,
    SharedModuleModule
  ]
})
export class ListPurchaseModule { }
