import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPermissionGroupRoutingModule } from './add-permission-group-routing.module';
import { AddPermissionGroupComponent } from './add-permission-group.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddPermissionGroupComponent],
  imports: [
    CommonModule,
    AddPermissionGroupRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddPermissionGroupModule { }
