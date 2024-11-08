import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SweetalertsRoutingModule } from './sweetalerts-routing.module';
import { SweetalertsComponent } from './sweetalerts.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SweetalertsComponent
  ],
  imports: [
    CommonModule,
    SweetalertsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SweetalertsModule { }
