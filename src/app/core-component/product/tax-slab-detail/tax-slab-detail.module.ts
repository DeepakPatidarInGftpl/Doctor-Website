import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxSlabDetailRoutingModule } from './tax-slab-detail-routing.module';
import { TaxSlabDetailComponent } from './tax-slab-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TaxSlabDetailComponent],
  imports: [
    CommonModule,
    TaxSlabDetailRoutingModule,
    FormsModule
  ]
})
export class TaxSlabDetailModule { }
