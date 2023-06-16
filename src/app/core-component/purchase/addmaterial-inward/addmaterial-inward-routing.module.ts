import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmaterialInwardComponent } from './addmaterial-inward.component';

const routes: Routes = [
  {path:'',component:AddmaterialInwardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddmaterialInwardRoutingModule { }
