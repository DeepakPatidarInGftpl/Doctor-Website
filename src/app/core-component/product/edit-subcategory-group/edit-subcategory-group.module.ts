import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSubcategoryGroupRoutingModule } from './edit-subcategory-group-routing.module';
import { EditSubcategoryGroupComponent } from './edit-subcategory-group.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    EditSubcategoryGroupComponent
  ],
  imports: [
    CommonModule,
    EditSubcategoryGroupRoutingModule,
    SharedModuleModule
  ]
})
export class EditSubcategoryGroupModule { }
