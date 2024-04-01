import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsBasedOnBrandsSubCategoryComponent } from './details-based-on-brands-sub-category.component';

const routes: Routes = [
  {path:'',component:DetailsBasedOnBrandsSubCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsBasedOnBrandsSubCategoryRoutingModule { }
