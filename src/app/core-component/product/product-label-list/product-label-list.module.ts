import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductLabelListRoutingModule } from './product-label-list-routing.module';
import { ProductLabelListComponent } from './product-label-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ProductLabelListComponent
  ],
  imports: [
    CommonModule,
    ProductLabelListRoutingModule,
    SharedModuleModule
  ]
})
export class ProductLabelListModule { }
