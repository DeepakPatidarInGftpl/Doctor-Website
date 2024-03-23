import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrapEntryListRoutingModule } from './scrap-entry-list-routing.module';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { ScrapEntryListComponent } from './scrap-entry-list.component';


@NgModule({
  declarations: [ScrapEntryListComponent],
  imports: [
    CommonModule,
    ScrapEntryListRoutingModule,
    SharedModuleModule
  ]
})
export class ScrapEntryListModule { }
