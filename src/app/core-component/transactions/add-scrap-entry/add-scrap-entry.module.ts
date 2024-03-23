import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddScrapEntryRoutingModule } from './add-scrap-entry-routing.module';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { AddScrapEntryComponent } from './add-scrap-entry.component';
@NgModule({
  declarations: [AddScrapEntryComponent],
  imports: [
    CommonModule,
    AddScrapEntryRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,

  ]
})
export class AddScrapEntryModule { }
