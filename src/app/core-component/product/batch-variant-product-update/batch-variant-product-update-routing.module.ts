import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchVariantProductUpdateComponent } from './batch-variant-product-update.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:BatchVariantProductUpdateComponent,canActivate: [RolesGuardGuard], 
  data: { allowedRoles: ['change_batch'] }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchVariantProductUpdateRoutingModule { }
