import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductOrderComponent } from './product-order.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ProductOrderComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_order']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductOrderRoutingModule { }
