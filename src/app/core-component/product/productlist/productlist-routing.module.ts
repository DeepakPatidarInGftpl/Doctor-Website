import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles=[]
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'product' ){
    //  if(res.codename=='view_product' || res.codename=='delete_product'){
    //   allowedRoles.push(res.codename);
    //   console.log(allowedRoles);  
    //  }
    if(res.codename=='view_product'){
      allowedRoles.push(res.codename);
      console.log(allowedRoles);  
     }
    }
  });
}

const routes: Routes = [{ path: '', component: ProductlistComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles:['view_product'] } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductlistRoutingModule { }
