import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddmaterialInwardRoutingModule } from './addmaterial-inward-routing.module';
import { AddmaterialInwardComponent } from './addmaterial-inward.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AddmaterialInwardComponent,
  ],
  imports: [
    CommonModule,
    AddmaterialInwardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule, 
  ]
})
export class AddmaterialInwardModule { }
