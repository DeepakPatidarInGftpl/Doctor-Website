import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitDetailsRoutingModule } from './unit-details-routing.module';
import { UnitDetailsComponent } from './unit-details.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    UnitDetailsComponent
  ],
  imports: [
    CommonModule,
    UnitDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class UnitDetailsModule { }