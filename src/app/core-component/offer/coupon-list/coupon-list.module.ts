import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponListRoutingModule } from './coupon-list-routing.module';
import { CouponListComponent } from './coupon-list.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    CouponListComponent
  ],
  imports: [
    CommonModule,
    CouponListRoutingModule,
    SharedModuleModule
  ]
})
export class CouponListModule { }
