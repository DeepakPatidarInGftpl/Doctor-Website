import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesDetailsComponent } from './sales-details.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [{ path: '', component: SalesDetailsComponent ,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_saleorder']}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesDetailsRoutingModule { }
