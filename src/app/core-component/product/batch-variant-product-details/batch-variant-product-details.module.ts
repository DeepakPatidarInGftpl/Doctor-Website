import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchVariantProductDetailsRoutingModule } from './batch-variant-product-details-routing.module';
import { BatchVariantProductDetailsComponent } from './batch-variant-product-details.component';


@NgModule({
  declarations: [BatchVariantProductDetailsComponent],
  imports: [
    CommonModule,
    BatchVariantProductDetailsRoutingModule
  ]
})
export class BatchVariantProductDetailsModule { }
