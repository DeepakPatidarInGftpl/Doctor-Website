import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';


@NgModule({
  declarations: [
    SalesComponent,
    
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ],
  providers : [DatePipe]
})
export class SalesModule { }
