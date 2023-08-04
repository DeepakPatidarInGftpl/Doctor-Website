import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingProductsComponent } from './trending-products.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'product' && res.content_type.model === 'trandingproduct') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [
  {path:'',component:TrendingProductsComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_trandingproduct', 'change_trandingproduct', 'delete_trandingproduct', 'view_trandingproduct']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingProductsRoutingModule { }
