import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsDebitnotesRoutingModule } from './details-debitnotes-routing.module';
import { DetailsDebitnotesComponent } from './details-debitnotes.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DetailsDebitnotesComponent
  ],
  imports: [
    CommonModule,
    DetailsDebitnotesRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DetailsDebitnotesModule { }
