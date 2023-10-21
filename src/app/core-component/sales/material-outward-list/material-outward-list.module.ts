import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialOutwardListRoutingModule } from './material-outward-list-routing.module';
import { MaterialOutwardListComponent } from './material-outward-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    MaterialOutwardListComponent
  ],
  imports: [
    CommonModule,
    MaterialOutwardListRoutingModule,
    SharedModuleModule
  ]
})
export class MaterialOutwardListModule { }