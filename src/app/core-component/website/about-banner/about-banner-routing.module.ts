import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBannerComponent } from './about-banner.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'website' && res.content_type.model === 'aboutbanner') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [
  {path:'',component:AboutBannerComponent,canActivate: [RolesGuardGuard],
  data: { allowedRoles: ['add_aboutbanner', 'change_aboutbanner', 'delete_aboutbanner', 'view_aboutbanner'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutBannerRoutingModule { }
