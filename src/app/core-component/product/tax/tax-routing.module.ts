import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxComponent } from './tax.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'tax'){
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{path:'',component:TaxComponent,canActivate:[RolesGuardGuard], 
data: { allowedRoles: ['add_tax', 'change_tax', 'delete_tax', 'view_tax'] }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxRoutingModule { }
