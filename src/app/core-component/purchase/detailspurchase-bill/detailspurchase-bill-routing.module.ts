import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailspurchaseBillComponent } from './detailspurchase-bill.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailspurchaseBillComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_purchasebill']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailspurchaseBillRoutingModule { }
