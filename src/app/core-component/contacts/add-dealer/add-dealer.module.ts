import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDealerRoutingModule } from './add-dealer-routing.module';
import { AddDealerComponent } from './add-dealer.component';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AddDealerComponent
  ],
  imports: [
    CommonModule,
    AddDealerRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule
  ]
})
export class AddDealerModule { }
