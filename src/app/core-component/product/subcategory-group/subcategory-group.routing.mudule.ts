import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryGroupComponent } from './subcategory-group.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'subcategorygroup'){
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{ path: '', component: SubcategoryGroupComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: ['view_subcategorygroup'] } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class subCatRoutingModule { }
