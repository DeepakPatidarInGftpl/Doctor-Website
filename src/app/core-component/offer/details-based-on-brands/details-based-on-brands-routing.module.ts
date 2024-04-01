import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsBasedOnBrandsComponent } from './details-based-on-brands.component';

const routes: Routes = [
  {path:'',component:DetailsBasedOnBrandsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsBasedOnBrandsRoutingModule { }
