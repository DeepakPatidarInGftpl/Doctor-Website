import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutFooterBannerComponent } from './about-footer-banner.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'website' && res.content_type.model === 'aboutfooterbanner') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [
  {path:'',component:AboutFooterBannerComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_aboutfooterbanner', 'change_aboutfooterbanner', 'delete_aboutfooterbanner', 'view_aboutfooterbanner']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutFooterBannerRoutingModule { }
