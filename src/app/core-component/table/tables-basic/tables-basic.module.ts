import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesBasicRoutingModule } from './tables-basic-routing.module';
import { TablesBasicComponent } from './tables-basic.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {  MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    TablesBasicComponent
  ],
  imports: [
    CommonModule,
    TablesBasicRoutingModule,
    SharedModuleModule,
    MatCheckboxModule,
    MatSlideToggleModule

  ]
})
export class TablesBasicModule { }
