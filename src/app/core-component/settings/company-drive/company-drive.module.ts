import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyDriveRoutingModule } from './company-drive-routing.module';
import { CompanyDriveComponent } from './company-drive.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [CompanyDriveComponent],
  imports: [
    CommonModule,
    CompanyDriveRoutingModule,
    SharedModuleModule
  ]
})
export class CompanyDriveModule { }
