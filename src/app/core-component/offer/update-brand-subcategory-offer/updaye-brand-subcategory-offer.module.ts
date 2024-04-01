import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdayeBrandSubcategoryOfferRoutingModule } from './updaye-brand-subcategory-offer-routing.module';
import { DatepickerModule } from 'ng2-datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { UpdayeBrandSubcategoryOfferComponent } from './updaye-brand-subcategory-offer.component';

@NgModule({
  declarations: [
    UpdayeBrandSubcategoryOfferComponent
  ],
  imports: [
    CommonModule,
    UpdayeBrandSubcategoryOfferRoutingModule,
    DatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSelectModule,
    MatCheckboxModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdayeBrandSubcategoryOfferModule { }
