import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPurchaseComponent } from './details-purchase.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailsPurchaseComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_purchaseorder']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPurchaseRoutingModule { }
