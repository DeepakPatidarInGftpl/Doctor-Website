import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstockVerificationComponent } from './addstock-verification.component';

const routes: Routes = [
  {path:'',component:AddstockVerificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddstockVerificationRoutingModule { }
