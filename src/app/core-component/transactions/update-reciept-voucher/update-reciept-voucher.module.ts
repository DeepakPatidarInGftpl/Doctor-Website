import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateRecieptVoucherRoutingModule } from './update-reciept-voucher-routing.module';
import { UpdateRecieptVoucherComponent } from './update-reciept-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    UpdateRecieptVoucherComponent
  ],
  imports: [
    CommonModule,
    UpdateRecieptVoucherRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ]
})
export class UpdateRecieptVoucherModule { }
