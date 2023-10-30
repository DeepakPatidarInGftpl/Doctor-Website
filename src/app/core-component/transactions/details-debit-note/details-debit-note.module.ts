import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsDebitNoteRoutingModule } from './details-debit-note-routing.module';
import { DetailsDebitNoteComponent } from './details-debit-note.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsDebitNoteComponent
  ],
  imports: [
    CommonModule,
    DetailsDebitNoteRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DetailsDebitNoteModule { }
