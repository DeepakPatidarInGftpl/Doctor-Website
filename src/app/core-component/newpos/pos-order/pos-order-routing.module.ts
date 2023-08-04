import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosOrderComponent } from './pos-order.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'pos' && res.content_type.model === 'posorder' && res.codename=='view_posorder'){
      allowedRoles=res.codename;
      console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  { path:'', component:PosOrderComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['view_posorder'] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosOrderRoutingModule { }
