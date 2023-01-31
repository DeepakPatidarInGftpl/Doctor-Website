import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { UnitConversionComponent } from './unit-conversion/unit-conversion.component';


@NgModule({
  declarations: [
    ProductComponent,
    UnitConversionComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
