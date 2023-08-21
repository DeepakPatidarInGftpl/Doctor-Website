import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSubcategoryGroupComponent } from './edit-subcategory-group.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:EditSubcategoryGroupComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['change_subcategorygroup', ] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSubcategoryGroupRoutingModule { }
