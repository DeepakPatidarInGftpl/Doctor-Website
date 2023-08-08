import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbrandComponent } from './addbrand.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{ path: '', component: AddbrandComponent ,canActivate:[RolesGuardGuard], 
data: { allowedRoles: ['add_brands'] }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddbrandRoutingModule { }
