import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailVendorRoutingModule } from './detail-vendor-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DetailVendorComponent } from './detail-vendor.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    DetailVendorComponent
  ],
  imports: [
    CommonModule,
    DetailVendorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModuleModule,
    MatStepperModule,
    MatButtonModule
  ]
})
export class DetailVendorModule { }
