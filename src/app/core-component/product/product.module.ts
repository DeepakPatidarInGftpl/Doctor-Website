import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddProductionVoucherComponent } from './add-production-voucher/add-production-voucher.component';
import { ListProductionVoucherComponent } from './list-production-voucher/list-production-voucher.component';
import { DetailProductionVoucherComponent } from './detail-production-voucher/detail-production-voucher.component';

@NgModule({
  declarations: [
    ProductComponent,
    AddProductionVoucherComponent,
    ListProductionVoucherComponent,
    DetailProductionVoucherComponent, 
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
