import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountdetailsRoutingModule } from './accountdetails-routing.module';
import { AccountdetailsComponent } from './accountdetails.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    AccountdetailsComponent
  ],
  imports: [
    CommonModule,
    AccountdetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class AccountdetailsModule { }
