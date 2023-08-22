import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticPagesComponent } from './static-pages.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData ) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'website' && res.content_type.model === 'staticpages' && res.codename == 'view_staticpages'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:StaticPagesComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_staticpages']}},
  { path: 'details/:slug',
  loadChildren: () =>
    import('./staticpage-detals/staticpage-detals.module').then(
      (m) => m.StaticpageDetalsModule
    ),}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
