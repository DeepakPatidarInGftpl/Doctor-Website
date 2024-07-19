import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureGroupRoutingModule } from './feature-group-routing.module';
import { FeatureGroupComponent } from './feature-group.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [FeatureGroupComponent],
  imports: [
    CommonModule,
    FeatureGroupRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class FeatureGroupModule { }
