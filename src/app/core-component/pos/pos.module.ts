import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos/pos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgxPaginationModule} from 'ngx-pagination';
import { InovoiceComponent } from './inovoice/inovoice.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    PosComponent,
    InovoiceComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    SharedModuleModule
    ]
})
export class PosModule { }
