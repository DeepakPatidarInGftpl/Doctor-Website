import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductionVoucherRoutingModule } from './add-production-voucher-routing.module';
import { AddProductionVoucherComponent } from './add-production-voucher.component';

import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AddProductionVoucherComponent
  ],
  imports: [
    CommonModule,
    AddProductionVoucherRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AddProductionVoucherModule { }
