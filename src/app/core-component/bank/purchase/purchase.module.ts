import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';

import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
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
export class PurchaseModule { }
