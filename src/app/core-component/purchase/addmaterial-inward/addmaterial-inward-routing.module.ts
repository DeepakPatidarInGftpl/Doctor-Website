import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmaterialInwardComponent } from './addmaterial-inward.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'materialinward' && res.codename=='add_materialinward'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:AddmaterialInwardComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_materialinward']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddmaterialInwardRoutingModule { }
