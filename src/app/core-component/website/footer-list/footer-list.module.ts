import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterListRoutingModule } from './footer-list-routing.module';
import { FooterListComponent } from './footer-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [FooterListComponent],
  imports: [
    CommonModule,
    FooterListRoutingModule,
    SharedModuleModule
  ]
})
export class FooterListModule { }
