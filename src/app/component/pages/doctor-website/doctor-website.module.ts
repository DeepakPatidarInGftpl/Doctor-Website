import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorWebsiteRoutingModule } from './doctor-website-routing.module';
import { ClinicComponent } from '../clinic/clinic.component';
import { AccupressuristComponent } from '../accupressurist/accupressurist.component';
import { ChiropractorComponent } from '../chiropractor/chiropractor.component';
import { DieticianComponent } from '../dietician/dietician.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from '../signup/signup.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [ 
    ClinicComponent,
    AccupressuristComponent,
    ChiropractorComponent,
    DieticianComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    DoctorWebsiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatMenuModule
  ]
})
export class DoctorWebsiteModule { }
