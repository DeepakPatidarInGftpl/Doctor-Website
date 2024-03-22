import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorWebsiteComponent } from './doctor-website.component';
import { ClinicComponent } from '../clinic/clinic.component';
import { AccupressuristComponent } from '../accupressurist/accupressurist.component';
import { ChiropractorComponent } from '../chiropractor/chiropractor.component';
import { DieticianComponent } from '../dietician/dietician.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  {
    path : '',
    component : DoctorWebsiteComponent,
    children :[
      

    ]

  },
  {
    path: "clinic",
    component: ClinicComponent
  },
  {
    path: "accupressurist",
    component: AccupressuristComponent
  },
  {
    path: "chiropractor",
    component: ChiropractorComponent
  },
  {
    path: "dietician",
    component: DieticianComponent
  },
  {
    path: "login",
    component: SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorWebsiteRoutingModule { }
