import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsBasedOnBrandsComponent } from './details-based-on-brands.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsBasedOnBrandsComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_discount']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsBasedOnBrandsRoutingModule { }
