import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatelistRoutingModule } from './statelist-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { StatelistComponent } from './statelist.component';

@NgModule({
  declarations: [
    StatelistComponent
  ],
  imports: [
    CommonModule,
    StatelistRoutingModule,
    SharedModuleModule
  ]
})
export class StatelistModule { }
