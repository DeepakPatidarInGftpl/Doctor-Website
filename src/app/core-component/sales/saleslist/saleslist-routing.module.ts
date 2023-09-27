import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleslistComponent } from './saleslist.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{ path: '', component: SaleslistComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_saleorder']} }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleslistRoutingModule { }
