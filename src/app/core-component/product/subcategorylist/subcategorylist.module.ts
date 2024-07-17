import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategorylistRoutingModule } from './subcategorylist-routing.module';
import { SubcategorylistComponent } from './subcategorylist.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SubcategorylistComponent
  ],
  imports: [
    CommonModule,
    SubcategorylistRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SubcategorylistModule { }
