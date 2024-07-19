import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxRoutingModule } from './tax-routing.module';
import { TaxComponent } from './tax.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    TaxComponent
  ],
  imports: [
    CommonModule,
    TaxRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TaxModule { }
