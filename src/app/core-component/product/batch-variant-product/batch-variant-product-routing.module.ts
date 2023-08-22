import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchVariantProductComponent } from './batch-variant-product.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:BatchVariantProductComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['add_batch'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchVariantProductRoutingModule { }
