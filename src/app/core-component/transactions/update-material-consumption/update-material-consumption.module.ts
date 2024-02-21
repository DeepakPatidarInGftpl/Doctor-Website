import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateMaterialConsumptionRoutingModule } from './update-material-consumption-routing.module';
import { UpdateMaterialConsumptionComponent } from './update-material-consumption.component';

import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [UpdateMaterialConsumptionComponent],
  imports: [
    CommonModule,
    UpdateMaterialConsumptionRoutingModule,
    SharedModuleModule,
    MatAutocompleteModule,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UpdateMaterialConsumptionModule { }
