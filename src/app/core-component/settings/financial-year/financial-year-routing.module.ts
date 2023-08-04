import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialYearComponent } from './financial-year.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'website' && res.content_type.model === 'financialyear'){
      allowedRoles.push(res.codename);
    }
  });
} 
const routes: Routes = [{path:'',component:FinancialYearComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: ['add_financialyear', 'change_financialyear', 'delete_financialyear', 'view_financialyear'] }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialYearRoutingModule { }
