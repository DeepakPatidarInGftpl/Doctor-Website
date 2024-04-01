import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListBrandOfferRoutingModule } from './list-brand-offer-routing.module';
import { ListBrandOfferComponent } from './list-brand-offer.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ListBrandOfferComponent
  ],
  imports: [
    CommonModule,
    ListBrandOfferRoutingModule,
    SharedModuleModule
  ]
})
export class ListBrandOfferModule { }
