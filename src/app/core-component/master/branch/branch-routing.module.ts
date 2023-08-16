import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'master' && res.content_type.model === 'branch') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [
  {path:'',component:BranchComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_branch']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchRoutingModule { }
