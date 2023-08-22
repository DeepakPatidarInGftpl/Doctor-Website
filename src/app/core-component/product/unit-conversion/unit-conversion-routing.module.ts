import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitConversionComponent } from './unit-conversion.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'product' && res.content_type.model === 'unitconversion') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [
  {path:'',component:UnitConversionComponent,canActivate: [RolesGuardGuard],
  data: { allowedRoles: ['add_unitconversion', 'change_unitconversion', 'delete_unitconversion', 'view_unitconversion'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitConversionRoutingModule { }
