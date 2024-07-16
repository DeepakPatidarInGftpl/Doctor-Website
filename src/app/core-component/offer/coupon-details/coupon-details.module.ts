import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponDetailsRoutingModule } from './coupon-details-routing.module';
import { CouponDetailsComponent } from './coupon-details.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CouponDetailsComponent
  ],
  imports: [
    CommonModule,
    CouponDetailsRoutingModule,
    SharedModuleModule,
    MatIconModule
  ]
})
export class CouponDetailsModule { }
