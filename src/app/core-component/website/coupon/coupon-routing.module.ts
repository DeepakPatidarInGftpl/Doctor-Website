import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './coupon.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'product' && res.content_type.model === 'coupon') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [
  {path:'',component:CouponComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_coupon', 'change_coupon', 'delete_coupon', 'view_coupon']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponRoutingModule { }
