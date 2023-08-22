import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'website' && res.content_type.model === 'banner') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{path:'',component:BannerComponent,canActivate: [RolesGuardGuard],
data: { allowedRoles: ['add_banner', 'change_banner', 'delete_banner', 'view_banner'] }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }
