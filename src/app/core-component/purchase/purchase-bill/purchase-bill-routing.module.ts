import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseBillComponent } from './purchase-bill.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';


const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'purchasebill' && res.codename=='view_purchasebill'){
      allowedRoles=res.codename;
      console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:PurchaseBillComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_purchasebill']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseBillRoutingModule { }
