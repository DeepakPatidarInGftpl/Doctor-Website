import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    ReactiveFormsModule
  ],
  exports :[PaymentsComponent]
})
export class PaymentsModule { }
