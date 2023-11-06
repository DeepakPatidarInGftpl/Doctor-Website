import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewArrivalBannerDetailsRoutingModule } from './new-arrival-banner-details-routing.module';
import { NewArrivalBannerDetailsComponent } from './new-arrival-banner-details.component';


import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    NewArrivalBannerDetailsComponent
  ],
  imports: [
    CommonModule,
    NewArrivalBannerDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class NewArrivalBannerDetailsModule { }
