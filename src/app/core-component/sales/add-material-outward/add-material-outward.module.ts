import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMaterialOutwardRoutingModule } from './add-material-outward-routing.module';
import { AddMaterialOutwardComponent } from './add-material-outward.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AddMaterialOutwardComponent
  ],
  imports: [
    CommonModule,
    AddMaterialOutwardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AddMaterialOutwardModule { }
