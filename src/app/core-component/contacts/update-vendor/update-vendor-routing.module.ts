import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateVendorComponent } from './update-vendor.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'contacts' && res.content_type.model === 'vendor' && res.codename=='change_vendor'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}

const routes: Routes = [
  {path:'',component:UpdateVendorComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['change_vendor'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateVendorRoutingModule { }
