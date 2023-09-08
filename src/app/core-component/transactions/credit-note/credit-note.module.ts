import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditNoteRoutingModule } from './credit-note-routing.module';
import { CreditNoteComponent } from './credit-note.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    CreditNoteComponent
  ],
  imports: [
    CommonModule,
    CreditNoteRoutingModule,
    SharedModuleModule
  ]
})
export class CreditNoteModule { }
