import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchVariantProductDetailsComponent } from './batch-variant-product-details.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:BatchVariantProductDetailsComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['view_batch'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchVariantProductDetailsRoutingModule { }
