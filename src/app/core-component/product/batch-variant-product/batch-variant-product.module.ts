import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchVariantProductRoutingModule } from './batch-variant-product-routing.module';
import { BatchVariantProductComponent } from './batch-variant-product.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BatchVariantProductComponent],
  imports: [
    CommonModule,
    BatchVariantProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ]
})
export class BatchVariantProductModule { }
