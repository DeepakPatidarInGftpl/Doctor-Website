import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailSupplierRoutingModule } from './detail-supplier-routing.module';
import { DetailSupplierComponent } from './detail-supplier.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    DetailSupplierComponent
  ],
  imports: [
    CommonModule,
    DetailSupplierRoutingModule,
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
export class DetailSupplierModule { }
