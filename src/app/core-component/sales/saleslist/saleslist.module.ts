import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleslistRoutingModule } from './saleslist-routing.module';
import { SaleslistComponent } from './saleslist.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    SaleslistComponent
  ],
  imports: [
    CommonModule,
    SaleslistRoutingModule,
    SharedModuleModule
  ],
  bootstrap: [SaleslistComponent]
})
export class SaleslistModule { }
