import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData ) {
  const permission = localStorageData;
  permission?.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'employee' && res.codename=='add_employee'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [{path:'',component:AddemployeeComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: [allowedRoles] }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddemployeeRoutingModule { }
