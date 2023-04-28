import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { PipeModuleModule } from '../pipe-module/pipe-module.module';


@NgModule({
  declarations: [
    ProductDetailsComponent,
   
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    PipeModuleModule
  ]
})
export class ProductDetailsModule { }
