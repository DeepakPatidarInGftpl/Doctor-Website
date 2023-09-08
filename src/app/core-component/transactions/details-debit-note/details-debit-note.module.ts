import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsDebitNoteRoutingModule } from './details-debit-note-routing.module';
import { DetailsDebitNoteComponent } from './details-debit-note.component';


@NgModule({
  declarations: [
    DetailsDebitNoteComponent
  ],
  imports: [
    CommonModule,
    DetailsDebitNoteRoutingModule
  ]
})
export class DetailsDebitNoteModule { }
