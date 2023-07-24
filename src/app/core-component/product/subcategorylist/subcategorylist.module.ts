import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategorylistRoutingModule } from './subcategorylist-routing.module';
import { SubcategorylistComponent } from './subcategorylist.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    SubcategorylistComponent
  ],
  imports: [
    CommonModule,
    SubcategorylistRoutingModule,
   SharedModuleModule
  ]
})
export class SubcategorylistModule { }
