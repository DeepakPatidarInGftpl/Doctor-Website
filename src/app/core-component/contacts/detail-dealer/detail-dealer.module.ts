import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDealerRoutingModule } from './detail-dealer-routing.module';
import { DetailDealerComponent } from './detail-dealer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
@NgModule({
  declarations: [DetailDealerComponent],
  imports: [
    CommonModule,
    DetailDealerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModuleModule
  ]
})
export class DetailDealerModule { }
