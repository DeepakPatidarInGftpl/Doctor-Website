import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountrieslistRoutingModule } from './countrieslist-routing.module';
import { CountrieslistComponent } from './countrieslist.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    CountrieslistComponent
  ],
  imports: [
    CommonModule,
    CountrieslistRoutingModule,
    SharedModuleModule
  ]
})
export class CountrieslistModule { }
