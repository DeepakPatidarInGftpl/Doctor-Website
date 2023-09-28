import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRecieptVoucherRoutingModule } from './add-reciept-voucher-routing.module';
import { AddRecieptVoucherComponent } from './add-reciept-voucher.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AddRecieptVoucherComponent
  ],
  imports: [
    CommonModule,
    AddRecieptVoucherRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ]
})
export class AddRecieptVoucherModule { }
