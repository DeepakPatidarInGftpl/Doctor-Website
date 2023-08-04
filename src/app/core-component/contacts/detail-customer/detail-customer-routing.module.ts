import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCustomerComponent } from './detail-customer.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:DetailCustomerComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_customer']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCustomerRoutingModule { }
