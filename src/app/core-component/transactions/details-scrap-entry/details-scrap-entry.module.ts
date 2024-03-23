import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsScrapEntryRoutingModule } from './details-scrap-entry-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { DetailsScrapEntryComponent } from './details-scrap-entry.component';


@NgModule({
  declarations: [
    DetailsScrapEntryComponent
  ],
  imports: [
    CommonModule,
    DetailsScrapEntryRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class DetailsScrapEntryModule { }
