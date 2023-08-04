import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterListComponent } from './footer-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';


const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'website' && res.content_type.model === 'footer' && res.codename == 'view_footer'){
      allowedRoles=res.codename;
      console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:FooterListComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_footer']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterListRoutingModule { }
