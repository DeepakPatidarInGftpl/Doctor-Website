import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    PurchaseComponent,

  
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ]
})
export class PurchaseModule { }
