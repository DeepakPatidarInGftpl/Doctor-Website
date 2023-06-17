import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatepurchaseBillRoutingModule } from './updatepurchase-bill-routing.module';
import { UpdatepurchaseBillComponent } from './updatepurchase-bill.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    UpdatepurchaseBillComponent
  ],
  imports: [
    CommonModule,
    UpdatepurchaseBillRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule, 
  ]
})
export class UpdatepurchaseBillModule { }
