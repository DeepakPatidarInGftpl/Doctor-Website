import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsTargetRoutingModule } from './details-target-routing.module';
import { DetailsTargetComponent } from './details-target.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    DetailsTargetComponent
  ],
  imports: [
    CommonModule,
    DetailsTargetRoutingModule,
    SharedModuleModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ]
})
export class DetailsTargetModule { }
