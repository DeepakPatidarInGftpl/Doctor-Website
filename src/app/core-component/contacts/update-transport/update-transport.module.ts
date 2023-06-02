import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateTransportRoutingModule } from './update-transport-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateTransportComponent } from './update-transport.component';

@NgModule({
  declarations: [
    UpdateTransportComponent
  ],
  imports: [
    CommonModule,
    UpdateTransportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UpdateTransportModule { }
