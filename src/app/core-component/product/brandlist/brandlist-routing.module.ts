import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandlistComponent } from './brandlist.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'brands'){
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{ path: '', component: BrandlistComponent,canActivate:[RolesGuardGuard], 
data: { allowedRoles: ['view_brands'] }  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandlistRoutingModule { }
