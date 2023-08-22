import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureGroupComponent } from './feature-group.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'product' && res.content_type.model === 'featuregroup') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{path:'',component:FeatureGroupComponent,canActivate: [RolesGuardGuard],
data: { allowedRoles: ['add_featuregroup', 'change_featuregroup', 'delete_featuregroup', 'view_featuregroup'] }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureGroupRoutingModule { }
