import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategorylistComponent } from './subcategorylist.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'productsubcategory'){
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{ path: '', component: SubcategorylistComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: ['add_productsubcategory', 'change_productsubcategory', 'delete_productsubcategory', 'view_productsubcategory'] } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategorylistRoutingModule { }
