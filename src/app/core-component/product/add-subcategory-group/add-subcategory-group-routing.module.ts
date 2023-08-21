import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubcategoryGroupComponent } from './add-subcategory-group.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:AddSubcategoryGroupComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['add_subcategorygroup'] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSubcategoryGroupRoutingModule { }
