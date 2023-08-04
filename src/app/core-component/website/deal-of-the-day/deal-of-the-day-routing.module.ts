import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealOfTheDayComponent } from './deal-of-the-day.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'product' && res.content_type.model === 'dealsoftheday') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{path:'',component:DealOfTheDayComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_dealsoftheday', 'change_dealsoftheday', 'delete_dealsoftheday', 'view_dealsoftheday']}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealOfTheDayRoutingModule { }
