import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitylistComponent } from './citylist.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'places' && res.content_type.model === 'city'){
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [
  {path:'',component:CitylistComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['add_city', 'change_city', 'delete_city', 'view_city'] } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitylistRoutingModule { }
