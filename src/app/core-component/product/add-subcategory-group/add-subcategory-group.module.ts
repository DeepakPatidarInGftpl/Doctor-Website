import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSubcategoryGroupRoutingModule } from './add-subcategory-group-routing.module';
import { AddSubcategoryGroupComponent } from './add-subcategory-group.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [AddSubcategoryGroupComponent],
  imports: [
    CommonModule,
    AddSubcategoryGroupRoutingModule,
    SharedModuleModule
  ]
})
export class AddSubcategoryGroupModule { }
