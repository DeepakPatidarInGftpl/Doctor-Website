import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailTransportRoutingModule } from './detail-transport-routing.module';
import { DetailTransportComponent } from './detail-transport.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DetailTransportComponent
  ],
  imports: [
    CommonModule,
    DetailTransportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class DetailTransportModule { }
