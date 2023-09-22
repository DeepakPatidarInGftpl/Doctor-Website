import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsMaterialInwardComponent } from '../../purchase/details-material-inward/details-material-inward.component';
import { DetailsMaterialOutwardComponent } from './details-material-outward.component';

const routes: Routes = [
  {path:'',component:DetailsMaterialOutwardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsMaterialOutwardRoutingModule { }
