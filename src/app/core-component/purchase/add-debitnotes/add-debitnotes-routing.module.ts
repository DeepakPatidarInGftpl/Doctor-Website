import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDebitnotesComponent } from './add-debitnotes.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'debitnote' && res.codename=='add_debitnote'){
      allowedRoles=res.codename;
      console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:AddDebitnotesComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_debitnote']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDebitnotesRoutingModule { }
