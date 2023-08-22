import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterFeaturesComponent } from './footer-features.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'website' && res.content_type.model === 'footerfeatures') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{path:'',component:FooterFeaturesComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_footerfeatures', 'change_footerfeatures', 'delete_footerfeatures', 'view_footerfeatures']}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterFeaturesRoutingModule { }
