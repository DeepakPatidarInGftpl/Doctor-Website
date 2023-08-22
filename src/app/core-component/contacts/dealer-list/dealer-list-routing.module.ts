import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerListComponent } from './dealer-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'dealer' && res.codename=='view_dealer'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:DealerListComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_dealer']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerListRoutingModule { }
