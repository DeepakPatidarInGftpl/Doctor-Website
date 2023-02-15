import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddcategoryRoutingModule } from './addcategory-routing.module';
import { AddcategoryComponent } from './addcategory.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddcategoryComponent
  ],
  imports: [
    CommonModule,
    AddcategoryRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AddcategoryComponent
  ]
})
export class AddcategoryModule { }
