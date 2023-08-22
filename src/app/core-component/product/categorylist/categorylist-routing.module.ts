import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorylistComponent } from './categorylist.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'productcategory'){
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{ path: '', component: CategorylistComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: ['add_productcategory', 'change_productcategory', 'delete_productcategory', 'view_productcategory'] } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorylistRoutingModule { }
