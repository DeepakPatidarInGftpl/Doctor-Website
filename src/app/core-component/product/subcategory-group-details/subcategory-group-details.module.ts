import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryGroupDetailsRoutingModule } from './subcategory-group-details-routing.module';
import { SubcategoryGroupDetailsComponent } from './subcategory-group-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [SubcategoryGroupDetailsComponent],
  imports: [
    CommonModule,
    SubcategoryGroupDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModuleModule
  ]
})
export class SubcategoryGroupDetailsModule { }
