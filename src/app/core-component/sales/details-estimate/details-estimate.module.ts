import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsEstimateRoutingModule } from './details-estimate-routing.module';
import { DetailsEstimateComponent } from './details-estimate.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    DetailsEstimateComponent
  ],
  imports: [
    CommonModule,
    DetailsEstimateRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class DetailsEstimateModule { }
