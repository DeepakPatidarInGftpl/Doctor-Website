import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcategoryRoutingModule } from './addcategory-routing.module';
import { AddcategoryComponent } from './addcategory.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AddcategoryComponent
  ],
  imports: [
    CommonModule,
    AddcategoryRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    AddcategoryComponent
  ]
})
export class AddcategoryModule { }
