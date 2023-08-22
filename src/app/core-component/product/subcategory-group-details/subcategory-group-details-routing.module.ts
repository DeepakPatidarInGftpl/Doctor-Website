import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryGroupDetailsComponent } from './subcategory-group-details.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'subcategorygroup' && res.codename=='view_subcategorygroup'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [{path:'',component:SubcategoryGroupDetailsComponent, canActivate: [RolesGuardGuard], 
data: { allowedRoles: ['view_subcategorygroup'] }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryGroupDetailsRoutingModule { }
