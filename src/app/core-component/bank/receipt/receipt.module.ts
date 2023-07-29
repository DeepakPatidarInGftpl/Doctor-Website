import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptRoutingModule } from './receipt-routing.module';
import { ReceiptComponent } from './receipt.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    ReceiptComponent
  ],
  imports: [
    CommonModule,
    ReceiptRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule

  ]
})
export class ReceiptModule { }
