import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCountraVoucherRoutingModule } from './add-countra-voucher-routing.module';
import { AddCountraVoucherComponent } from './add-countra-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AddCountraVoucherComponent
  ],
  imports: [
    CommonModule,
    AddCountraVoucherRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  
  ]
})
export class AddCountraVoucherModule { }
