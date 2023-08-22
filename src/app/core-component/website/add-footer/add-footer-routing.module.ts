import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFooterComponent } from './add-footer.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'website' && res.content_type.model === 'footer' && res.codename == 'add_footer'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:AddFooterComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_footer']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddFooterRoutingModule { }
