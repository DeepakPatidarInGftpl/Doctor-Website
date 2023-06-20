import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateDebitnotesRoutingModule } from './update-debitnotes-routing.module';
import { UpdateDebitnotesComponent } from './update-debitnotes.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    UpdateDebitnotesComponent
  ],
  imports: [
    CommonModule,
    UpdateDebitnotesRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule, 
  ]
})
export class UpdateDebitnotesModule { }
