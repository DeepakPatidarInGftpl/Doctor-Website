import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsDetailsComponent } from './terms-details.component';

const routes: Routes = [
  {path:'',component:TermsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsDetailsRoutingModule { }
