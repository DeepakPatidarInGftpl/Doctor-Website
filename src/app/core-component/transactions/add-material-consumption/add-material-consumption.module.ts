import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMaterialConsumptionRoutingModule } from './add-material-consumption-routing.module';
import { AddMaterialConsumptionComponent } from './add-material-consumption.component';

import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AddMaterialConsumptionComponent],
  imports: [
    CommonModule,
    AddMaterialConsumptionRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AddMaterialConsumptionModule { }
