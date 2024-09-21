import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SizeChartComponent } from './size-chart.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'sizechart'){
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{path:'',component:SizeChartComponent,canActivate:[RolesGuardGuard], 
data: { allowedRoles: ['add_sizechart', 'change_sizechart', 'delete_sizechart', 'view_sizechart'] }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SizeChartRoutingModule { }