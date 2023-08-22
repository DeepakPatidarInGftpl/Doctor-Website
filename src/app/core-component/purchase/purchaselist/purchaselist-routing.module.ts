import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaselistComponent } from './purchaselist.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename=='view_purchaseorder'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}

const routes: Routes = [{ path: '', component: PurchaselistComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_purchaseorder']} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaselistRoutingModule { }
