import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitylistRoutingModule } from './citylist-routing.module';
import { CitylistComponent } from './citylist.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [CitylistComponent],
  imports: [
    CommonModule,
    CitylistRoutingModule,
    SharedModuleModule
  ]
})
export class CitylistModule { }
