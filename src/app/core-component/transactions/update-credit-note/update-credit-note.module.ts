import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCreditNoteRoutingModule } from './update-credit-note-routing.module';

import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpdateCreditNoteComponent } from './update-credit-note.component';

@NgModule({
  declarations: [
    UpdateCreditNoteComponent
  ],
  imports: [
    CommonModule,
    UpdateCreditNoteRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateCreditNoteModule { }
