import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListExpenseComponent } from './list-expense.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'pos' && res.content_type.model === 'expance' && res.codename == 'view_expance') {
      allowedRoles = res.codename;
      // console.log(allowedRoles);
    }
  });
}

const routes: Routes = [
  {path:'',component:ListExpenseComponent,canActivate: [RolesGuardGuard],
  data: { allowedRoles: ['view_expance'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListExpenseRoutingModule { }
