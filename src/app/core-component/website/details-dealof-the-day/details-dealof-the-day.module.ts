import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsDealofTheDayRoutingModule } from './details-dealof-the-day-routing.module';
import { DetailsDealofTheDayComponent } from './details-dealof-the-day.component';


import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsDealofTheDayComponent
  ],
  imports: [
    CommonModule,
    DetailsDealofTheDayRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DetailsDealofTheDayModule { }
