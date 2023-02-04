import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategorydetailsRoutingModule } from './subcategorydetails-routing.module';
import { SubcategorydetailsComponent } from './subcategorydetails.component';


@NgModule({
  declarations: [
    SubcategorydetailsComponent
  ],
  imports: [
    CommonModule,
    SubcategorydetailsRoutingModule
  ]
})
export class SubcategorydetailsModule { }
