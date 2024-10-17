import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRecieptRoutingModule } from './details-reciept-routing.module';
import { DetailsRecieptComponent } from './details-reciept.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DetailsRecieptComponent
  ],
  imports: [
    CommonModule,
    DetailsRecieptRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class DetailsRecieptModule { }
