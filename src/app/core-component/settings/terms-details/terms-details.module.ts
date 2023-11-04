import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsDetailsRoutingModule } from './terms-details-routing.module';


import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { TermsDetailsComponent } from './terms-details.component';

@NgModule({
  declarations: [
    TermsDetailsComponent
  ],
  imports: [
    CommonModule,
    TermsDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class TermsDetailsModule { }
