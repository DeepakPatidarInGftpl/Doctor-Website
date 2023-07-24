import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { CouponComponent } from './coupon.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    CouponComponent
  ],
  imports: [
    CommonModule,
    CouponRoutingModule,
    SharedModuleModule
  ]
})
export class CouponModule { }
