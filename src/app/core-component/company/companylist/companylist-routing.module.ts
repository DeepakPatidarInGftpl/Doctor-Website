import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanylistComponent } from './companylist.component';

const routes: Routes = [{path:'',component:CompanylistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanylistRoutingModule { }
