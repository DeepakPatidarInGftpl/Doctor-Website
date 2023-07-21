import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatematerialInwardComponent } from './updatematerial-inward.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';


const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'materialinward' && res.codename=='change_materialinward'){
      allowedRoles=res.codename;
      console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:UpdatematerialInwardComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:[allowedRoles]}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatematerialInwardRoutingModule { }
