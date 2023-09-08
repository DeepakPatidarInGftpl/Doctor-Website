import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebitNoteRoutingModule } from './debit-note-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { DebitNoteComponent } from './debit-note.component';

@NgModule({
  declarations: [
    DebitNoteComponent
  ],
  imports: [
    CommonModule,
    DebitNoteRoutingModule,
    SharedModuleModule
  ]
})
export class DebitNoteModule { }
