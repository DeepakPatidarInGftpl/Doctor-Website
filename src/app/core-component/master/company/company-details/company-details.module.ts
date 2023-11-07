import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailsRoutingModule } from './company-details-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/core-component/shared-module/shared-module.module';
import { CompanyDetailsComponent } from './company-details.component';


@NgModule({
  declarations: [CompanyDetailsComponent],
  imports: [
    CommonModule,
    CompanyDetailsRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    SharedModuleModule
  ]
})
export class CompanyDetailsModule { }
