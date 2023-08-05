import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategorydetailsComponent } from './subcategorydetails.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{path:'',component:SubcategorydetailsComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: ['view_productsubcategory'] }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategorydetailsRoutingModule { }
