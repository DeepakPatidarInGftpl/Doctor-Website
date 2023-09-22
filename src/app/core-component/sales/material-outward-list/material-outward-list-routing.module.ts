import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialOutwardListComponent } from './material-outward-list.component';

const routes: Routes = [
  {path:'',component:MaterialOutwardListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialOutwardListRoutingModule { }
