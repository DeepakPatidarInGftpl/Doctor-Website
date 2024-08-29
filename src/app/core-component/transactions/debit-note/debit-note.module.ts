import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DebitNoteRoutingModule } from './debit-note-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { DebitNoteComponent } from './debit-note.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    DebitNoteComponent
  ],
  imports: [
    CommonModule,
    DebitNoteRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers:[DatePipe]
})
export class DebitNoteModule { }
