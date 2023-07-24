import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealerListRoutingModule } from './dealer-list-routing.module';
import { DealerListComponent } from './dealer-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    DealerListComponent
  ],
  imports: [
    CommonModule,
    DealerListRoutingModule,
    SharedModuleModule
  ]
})
export class DealerListModule { }
