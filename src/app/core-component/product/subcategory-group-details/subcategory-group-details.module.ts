import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryGroupDetailsRoutingModule } from './subcategory-group-details-routing.module';
import { SubcategoryGroupDetailsComponent } from './subcategory-group-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [SubcategoryGroupDetailsComponent],
  imports: [
    CommonModule,
    SubcategoryGroupDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class SubcategoryGroupDetailsModule { }
