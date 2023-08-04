import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrieslistComponent } from './countrieslist.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'places' && res.content_type.model === 'country'){
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{ path: '', component: CountrieslistComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: ['add_country', 'change_country', 'delete_country', 'view_country'] } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountrieslistRoutingModule { }
