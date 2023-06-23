import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryGroupComponent } from './subcategory-group.component';
import { subCatRoutingModule } from './subcategory-group.routing.mudule';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    SubcategoryGroupComponent
  ],
  imports: [
    CommonModule,
    subCatRoutingModule,
   SharedModuleModule
  ]
})
export class subcatModule { }
