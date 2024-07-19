import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HsncodeRoutingModule } from './hsncode-routing.module';
import { HsncodeComponent } from './hsncode.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HsncodeComponent
  ],
  imports: [
    CommonModule,
    HsncodeRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class HsncodeModule { }
