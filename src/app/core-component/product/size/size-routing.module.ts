import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SizeComponent } from './size.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'size'){
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{path:'',component:SizeComponent,canActivate:[RolesGuardGuard], 
data: { allowedRoles: ['add_size', 'change_size', 'delete_size', 'view_size'] }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SizeRoutingModule { }
