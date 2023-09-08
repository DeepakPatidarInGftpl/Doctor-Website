import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDebitNoteRoutingModule } from './update-debit-note-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { UpdateDebitNoteComponent } from './update-debit-note.component';

@NgModule({
  declarations: [
    UpdateDebitNoteComponent
  ],
  imports: [
    CommonModule,
    UpdateDebitNoteRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateDebitNoteModule { }
