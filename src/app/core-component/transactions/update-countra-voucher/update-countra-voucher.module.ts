import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCountraVoucherRoutingModule } from './update-countra-voucher-routing.module';
import { UpdateCountraVoucherComponent } from './update-countra-voucher.component';

import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    UpdateCountraVoucherComponent
  ],
  imports: [
    CommonModule,
    UpdateCountraVoucherRoutingModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    SharedModuleModule
  
  ]
})
export class UpdateCountraVoucherModule { }
