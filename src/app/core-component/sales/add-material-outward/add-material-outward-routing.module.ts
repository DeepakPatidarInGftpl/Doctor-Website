import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMaterialOutwardComponent } from './add-material-outward.component';

const routes: Routes = [
  {path:'',component:AddMaterialOutwardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMaterialOutwardRoutingModule { }
