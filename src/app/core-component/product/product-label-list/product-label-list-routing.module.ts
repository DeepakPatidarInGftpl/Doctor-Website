import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLabelListComponent } from './product-label-list.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ProductLabelListComponent,canActivate:[RolesGuardGuard], 
  data: { allowedRoles: ['add_productlabel', 'change_productlabel', 'delete_productlabel', 'view_productlabel'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductLabelListRoutingModule { }
