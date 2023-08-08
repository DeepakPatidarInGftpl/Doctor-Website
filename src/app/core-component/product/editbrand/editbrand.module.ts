import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditbrandRoutingModule } from './editbrand-routing.module';
import { EditbrandComponent } from './editbrand.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    EditbrandComponent
  ],
  imports: [
    CommonModule,
    EditbrandRoutingModule,
    SharedModuleModule
  ]
})
export class EditbrandModule { }
