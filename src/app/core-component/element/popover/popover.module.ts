import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverRoutingModule } from './popover-routing.module';
import { PopoverComponent } from './popover.component';


@NgModule({
  declarations: [
    PopoverComponent
  ],
  imports: [
    CommonModule,
    PopoverRoutingModule
  ],
  exports : [
    PopoverComponent
  ]
})
export class PopoverModule { }
