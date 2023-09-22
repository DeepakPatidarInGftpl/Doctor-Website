import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimateListRoutingModule } from './estimate-list-routing.module';
import { EstimateListComponent } from './estimate-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    EstimateListComponent
  ],
  imports: [
    CommonModule,
    EstimateListRoutingModule,
    SharedModuleModule
  ]
})
export class EstimateListModule { }
