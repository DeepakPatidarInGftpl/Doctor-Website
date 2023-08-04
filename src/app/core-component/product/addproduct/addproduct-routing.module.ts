import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'product' && res.codename=='add_product'){
      allowedRoles=res.codename;
      console.log(allowedRoles);  
    }
  });
}

const routes: Routes = [{ path: '', component: AddproductComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: ['add_product'] }  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddproductRoutingModule { }
