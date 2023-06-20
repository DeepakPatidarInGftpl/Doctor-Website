import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealOfTheDayRoutingModule } from './deal-of-the-day-routing.module';
import { DealOfTheDayComponent } from './deal-of-the-day.component';


@NgModule({
  declarations: [
    DealOfTheDayComponent
  ],
  imports: [
    CommonModule,
    DealOfTheDayRoutingModule
  ]
})
export class DealOfTheDayModule { }
