import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxSlabUpdatedComponent } from './tax-slab-updated.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
let allowedRoles;
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'product' && res.content_type.model === 'taxslabs' && res.codename=='change_taxslabs'){
      allowedRoles=res.codename;
      // console.log(allowedRoles);  
    }
  });
}
const routes: Routes = [{path:'',component:TaxSlabUpdatedComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxSlabUpdatedRoutingModule { }
