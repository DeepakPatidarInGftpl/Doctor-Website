import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { TransportComponent } from '../transport/transport.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    TransportComponent
  ],
  imports: [
    CommonModule,
    TransportRoutingModule,
    SharedModuleModule
  ]
})
export class TransportModule { }
