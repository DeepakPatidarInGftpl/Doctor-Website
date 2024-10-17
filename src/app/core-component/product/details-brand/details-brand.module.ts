import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsBrandRoutingModule } from './details-brand-routing.module';
import { DetailsBrandComponent } from './details-brand.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
@NgModule({
  declarations: [
    DetailsBrandComponent,
  ],
  imports: [
    CommonModule,
    DetailsBrandRoutingModule,
    FormsModule,
    ReactiveFormsModule,
 
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModuleModule
  ]
})
export class DetailsBrandModule { }
