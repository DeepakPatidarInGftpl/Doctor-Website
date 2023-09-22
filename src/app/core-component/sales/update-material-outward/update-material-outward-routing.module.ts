import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateMaterialOutwardComponent } from './update-material-outward.component';

const routes: Routes = [
  {path:'',component:UpdateMaterialOutwardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateMaterialOutwardRoutingModule { }
