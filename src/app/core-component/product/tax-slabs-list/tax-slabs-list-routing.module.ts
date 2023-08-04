import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxSlabsListComponent } from './tax-slabs-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';


const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'taxslabs' && res.codename=='view_taxslabs'){
      allowedRoles=res.codename;
      console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [
  {
    path: '', component: TaxSlabsListComponent, canActivate: [RolesGuardGuard],
    data: { allowedRoles: ['view_taxslabs'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxSlabsListRoutingModule { }
