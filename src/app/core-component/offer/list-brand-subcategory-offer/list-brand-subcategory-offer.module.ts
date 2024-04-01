import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBrandSubcategoryOfferRoutingModule } from './list-brand-subcategory-offer-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { ListBrandSubcategoryOfferComponent } from './list-brand-subcategory-offer.component';

@NgModule({
  declarations: [
    ListBrandSubcategoryOfferComponent
  ],
  imports: [
    CommonModule,
    ListBrandSubcategoryOfferRoutingModule,
    SharedModuleModule
  ]
})
export class ListBrandSubcategoryOfferModule { }
