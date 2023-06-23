import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorsRoutingModule } from './colors-routing.module';
import { ColorsComponent } from './colors.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    ColorsComponent
  ],
  imports: [
    CommonModule,
    ColorsRoutingModule,
    SharedModuleModule
  ]
})
export class ColorsModule { }
