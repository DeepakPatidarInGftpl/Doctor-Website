import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchVariantProductUpdateRoutingModule } from './batch-variant-product-update-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BatchVariantProductUpdateComponent } from './batch-variant-product-update.component';


@NgModule({
  declarations: [
    BatchVariantProductUpdateComponent
  ],
  imports: [
    CommonModule,
    BatchVariantProductUpdateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BatchVariantProductUpdateModule { }
