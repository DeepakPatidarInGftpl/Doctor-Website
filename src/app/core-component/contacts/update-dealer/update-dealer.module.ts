import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateDealerRoutingModule } from './update-dealer-routing.module';
import { UpdateDealerComponent } from './update-dealer.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    UpdateDealerComponent
  ],
  imports: [
    CommonModule,
    UpdateDealerRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule
  ]
})
export class UpdateDealerModule { }
