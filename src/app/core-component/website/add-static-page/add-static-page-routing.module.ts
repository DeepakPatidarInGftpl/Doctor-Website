import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStaticPageComponent } from './add-static-page.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'website' && res.content_type.model === 'staticpages' && res.codename == 'add_staticpages'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:AddStaticPageComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_staticpages']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStaticPageRoutingModule { }
