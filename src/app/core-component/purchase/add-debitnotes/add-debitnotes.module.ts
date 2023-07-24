import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDebitnotesRoutingModule } from './add-debitnotes-routing.module';
import { AddDebitnotesComponent } from './add-debitnotes.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AddDebitnotesComponent
  ],
  imports: [
    CommonModule,
    AddDebitnotesRoutingModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule, 
  ]
})
export class AddDebitnotesModule { }
