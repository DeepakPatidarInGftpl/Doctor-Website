import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddbrandRoutingModule } from './addbrand-routing.module';
import { AddbrandComponent } from './addbrand.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AddbrandComponent,
  ],
  imports: [
    CommonModule,
    AddbrandRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AddbrandModule { }
