import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsBasedOnBrandsSubCategoryComponent } from './details-based-on-brands-sub-category.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsBasedOnBrandsSubCategoryComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_discount']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsBasedOnBrandsSubCategoryRoutingModule { }
