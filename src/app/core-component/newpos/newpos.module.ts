import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewposRoutingModule } from './newpos-routing.module';
import { NewposComponent } from './newpos.component';


@NgModule({
  declarations: [
    NewposComponent
  ],
  imports: [
    CommonModule,
    NewposRoutingModule
  ]
})
export class NewposModule { }
