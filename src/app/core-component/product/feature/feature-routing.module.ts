import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'product' && res.content_type.model === 'productfeatures') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{path:'',component:FeatureComponent,canActivate: [RolesGuardGuard],
data: { allowedRoles: ['add_productfeatures', 'change_productfeatures', 'delete_productfeatures', 'view_productfeatures'] }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
