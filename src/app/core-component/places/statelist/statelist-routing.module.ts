import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatelistComponent } from './statelist.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'places' && res.content_type.model === 'state'){
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [{ path: '', component: StatelistComponent,canActivate: [RolesGuardGuard], 
data: { allowedRoles: ['add_state', 'change_state', 'delete_state', 'view_state'] } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatelistRoutingModule { }
