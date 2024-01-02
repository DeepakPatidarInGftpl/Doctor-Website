import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDepartmentRoutingModule } from './list-department-routing.module';
import { ListDepartmentComponent } from './list-department.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ListDepartmentComponent
  ],
  imports: [
    CommonModule,
    ListDepartmentRoutingModule,
    SharedModuleModule
  ]
})
export class ListDepartmentModule { }
