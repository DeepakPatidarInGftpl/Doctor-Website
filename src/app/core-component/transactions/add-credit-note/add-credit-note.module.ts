import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCreditNoteRoutingModule } from './add-credit-note-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddCreditNoteComponent } from './add-credit-note.component';

@NgModule({
  declarations: [
    AddCreditNoteComponent
  ],
  imports: [
    CommonModule,
    AddCreditNoteRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AddCreditNoteModule { }
