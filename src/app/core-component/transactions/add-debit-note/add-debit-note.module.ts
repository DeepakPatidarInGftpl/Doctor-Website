import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDebitNoteRoutingModule } from './add-debit-note-routing.module';
import { AddDebitNoteComponent } from './add-debit-note.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AddDebitNoteComponent
  ],
  
  imports: [
    CommonModule,
    AddDebitNoteRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AddDebitNoteModule { }
