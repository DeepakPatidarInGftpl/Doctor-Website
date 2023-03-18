import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryGroupDetailsRoutingModule } from './subcategory-group-details-routing.module';
import { SubcategoryGroupDetailsComponent } from './subcategory-group-details.component';


@NgModule({
  declarations: [SubcategoryGroupDetailsComponent],
  imports: [
    CommonModule,
    SubcategoryGroupDetailsRoutingModule
  ]
})
export class SubcategoryGroupDetailsModule { }
