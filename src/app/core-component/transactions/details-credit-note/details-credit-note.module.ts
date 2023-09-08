import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCreditNoteRoutingModule } from './details-credit-note-routing.module';
import { DetailsCreditNoteComponent } from './details-credit-note.component';


@NgModule({
  declarations: [
    DetailsCreditNoteComponent
  ],
  imports: [
    CommonModule,
    DetailsCreditNoteRoutingModule
  ]
})
export class DetailsCreditNoteModule { }
