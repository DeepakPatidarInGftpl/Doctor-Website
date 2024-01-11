import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailMembershipRoutingModule } from './detail-membership-routing.module';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { DetailMembershipComponent } from './detail-membership.component';

@NgModule({
  declarations: [
    DetailMembershipComponent
  ],
  imports: [
    CommonModule,
    DetailMembershipRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class DetailMembershipModule { }
