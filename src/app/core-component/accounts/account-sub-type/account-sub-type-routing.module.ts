import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSubTypeComponent } from './account-sub-type.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'master' && res.content_type.model === 'accountsubtypes') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [
  {path:'',component:AccountSubTypeComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['add_accountsubtypes', 'change_accountsubtypes', 'delete_accountsubtypes', 'view_accountsubtypes'] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSubTypeRoutingModule { }
