import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error500RoutingModule } from './error500-routing.module';
import { Error500Component } from './error500.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    Error500Component
  ],
  imports: [
    CommonModule,
    Error500RoutingModule,
    MatIconModule
  ]
})
export class Error500Module { }
