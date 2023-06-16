import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsMaterialInwardRoutingModule } from './details-material-inward-routing.module';
import { DetailsMaterialInwardComponent } from './details-material-inward.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DetailsMaterialInwardComponent,
  ],
  imports: [
    CommonModule,
    DetailsMaterialInwardRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class DetailsMaterialInwardModule { }
