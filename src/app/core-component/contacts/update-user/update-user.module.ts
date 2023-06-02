import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateUserRoutingModule } from './update-user-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user.component';
@NgModule({
  declarations: [
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    UpdateUserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UpdateUserModule { }
