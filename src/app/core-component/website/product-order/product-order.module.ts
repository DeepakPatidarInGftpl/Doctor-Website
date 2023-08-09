import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductOrderRoutingModule } from './product-order-routing.module';
import { ProductOrderComponent } from './product-order.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductOrderComponent],
  imports: [
    CommonModule,
    ProductOrderRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductOrderModule { }