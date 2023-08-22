import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDebitnotesComponent } from './update-debitnotes.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'debitnote' && res.codename=='change_debitnote'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {path:'',component:UpdateDebitnotesComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['change_debitnote']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDebitnotesRoutingModule { }
