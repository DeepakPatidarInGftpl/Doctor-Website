import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSubcategoryGroupRoutingModule } from './add-subcategory-group-routing.module';
import { AddSubcategoryGroupComponent } from './add-subcategory-group.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [AddSubcategoryGroupComponent],
  imports: [
    CommonModule,
    AddSubcategoryGroupRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AddSubcategoryGroupModule { }
