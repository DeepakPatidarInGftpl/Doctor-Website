import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditNoteRoutingModule } from './credit-note-routing.module';
import { CreditNoteComponent } from './credit-note.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    CreditNoteComponent
  ],
  imports: [
    CommonModule,
    CreditNoteRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class CreditNoteModule { }
