import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountlistComponent } from './accountlist.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'account' && res.codename == 'view_account'){
      allowedRoles=res.codename;
      console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [{path:'',component:AccountlistComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: [allowedRoles] }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountlistRoutingModule { }
