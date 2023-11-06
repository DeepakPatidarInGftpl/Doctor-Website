import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPagesComponent } from './static-pages.component';

import { StaticPagesRoutingModule } from './static-pages-routing.module';

import { StaticpageDetalsComponent } from './staticpage-detals/staticpage-detals.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StaticPagesComponent,
   
    StaticpageDetalsComponent,
 
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    SharedModuleModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class StaticPagesModule { }
