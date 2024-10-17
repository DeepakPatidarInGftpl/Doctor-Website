import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosOrderRoutingModule } from './pos-order-routing.module';
import { PosOrderComponent } from './pos-order.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    PosOrderComponent
  ],
  imports: [
    CommonModule,
    PosOrderRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class PosOrderModule { }
