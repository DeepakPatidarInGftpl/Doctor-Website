import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleBillListComponent } from './sale-bill-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:SaleBillListComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_salebill']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleBillListRoutingModule { }
