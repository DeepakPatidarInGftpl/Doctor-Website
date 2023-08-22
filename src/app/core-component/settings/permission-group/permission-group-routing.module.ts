import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGroupComponent } from './permission-group.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'auth' && res.content_type.model === 'group' && res.codename=='view_group'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}

const routes: Routes = [{path:'',component:PermissionGroupComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_group']}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionGroupRoutingModule { }
