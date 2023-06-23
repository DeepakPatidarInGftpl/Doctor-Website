import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxSlabsListRoutingModule } from './tax-slabs-list-routing.module';
import { TaxSlabsListComponent } from './tax-slabs-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [TaxSlabsListComponent],
  imports: [
    CommonModule,
    TaxSlabsListRoutingModule,
SharedModuleModule
  ]
})
export class TaxSlabsListModule { }
