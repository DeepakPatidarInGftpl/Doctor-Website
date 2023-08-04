import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyBankComponent } from './add-company-bank.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'pos' && res.content_type.model === 'companybank' && res.codename == 'add_companybank') {
      allowedRoles = res.codename;
      console.log(allowedRoles);
    }
  });
}
const routes: Routes = [
  {
    path: '', component: AddCompanyBankComponent, canActivate: [RolesGuardGuard],
    data: { allowedRoles: ['add_companybank'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCompanyBankRoutingModule { }
