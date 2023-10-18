import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatematerialInwardRoutingModule } from './updatematerial-inward-routing.module';
import { UpdatematerialInwardComponent } from './updatematerial-inward.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    UpdatematerialInwardComponent,
  ],
  imports: [
    CommonModule,
    UpdatematerialInwardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, MatDialogModule
  ]
})
export class UpdatematerialInwardModule { }
