import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ProductOrderRoutingModule } from './product-order-routing.module';
import { ProductOrderComponent } from './product-order.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [ProductOrderComponent],
  imports: [
    CommonModule,
    ProductOrderRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers:[DatePipe]
})
export class ProductOrderModule { }
