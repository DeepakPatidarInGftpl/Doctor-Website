import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressStoreComponent } from './add-address-store.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'add_storeaddress'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:AddAddressStoreComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_storeaddress']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAddressStoreRoutingModule { }
