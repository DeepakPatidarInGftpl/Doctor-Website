import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
  ], 
   providers:[
    DatePipe
  ],
})
export class EstimateListModule { }
