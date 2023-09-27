import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateMaterialOutwardRoutingModule } from './update-material-outward-routing.module';
import { UpdateMaterialOutwardComponent } from './update-material-outward.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    UpdateMaterialOutwardComponent
  ],
  imports: [
    CommonModule,
    UpdateMaterialOutwardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateMaterialOutwardModule { }
