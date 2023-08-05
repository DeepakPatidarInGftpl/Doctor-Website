import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcompanyComponent } from './editcompany.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'company' && res.codename == 'change_company'){
      allowedRoles=res.codename;
      console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [{path:'',component:EditcompanyComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: ['change_company'] }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditcompanyRoutingModule { }
