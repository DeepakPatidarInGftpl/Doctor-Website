import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductOrderDetailsComponent } from './product-order-details.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ProductOrderDetailsComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_order']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductOrderDetailsRoutingModule { }
