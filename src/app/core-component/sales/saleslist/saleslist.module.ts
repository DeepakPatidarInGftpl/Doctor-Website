import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SaleslistRoutingModule } from './saleslist-routing.module';
import { SaleslistComponent } from './saleslist.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    SaleslistComponent
  ],
  imports: [
    CommonModule,
    SaleslistRoutingModule,
    SharedModuleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers:[
    DatePipe
  ],
  bootstrap: [SaleslistComponent],
  
})
export class SaleslistModule { }
